import { useEffect } from 'react';
import { ReviewForm } from '../review-form/component.tsx';
import { useUpdateReviewMutation } from '../../redux/services/api.ts';
import { IReview, TUser } from '../../types.tsx';

type Props = {
	className?: string;
	review: IReview;
	user: TUser;
	onUpdateFinished: () => void;
};

export const UpdateReviewFormContainer: React.FC<
	Props
> = ({ className, review, user, onUpdateFinished }) => {
	const [updateReview, { isLoading, isSuccess }] = useUpdateReviewMutation();

	// const { data: user } = useGetUsersQuery(undefined, {
	//   selectFromResult: (result) => ({
	//     ...result,
	//     data: result.data?.find(
	//       (restaurantItem) => review.userId === restaurantItem.id
	//     ),
	//   }),
	// });

	useEffect(() => {
		if (isSuccess) {
			onUpdateFinished();
		}
	}, [isSuccess, onUpdateFinished]);

	if (isLoading) {
		return <div>Updating...</div>;
	}

	if (!review && !user) {
		return null;
	}

	const { id, text, rating } = review;

	return (
		<ReviewForm
			className={className}
			initialState={{ text, rating }}
			userName={user?.name}
			showCancelBtn={true}
			onCancel={onUpdateFinished}
			onSave={(updatedReview) =>
				updateReview({
					updatedReview: {
						...updatedReview,
						userId: review.userId,
						id,
					},
				})
			}
		/>
	);
};
