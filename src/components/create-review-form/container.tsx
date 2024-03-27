import { ReviewForm } from '../review-form/component.tsx';
import { useCreateReviewMutation } from '../../redux/services/api.ts';
import { useContext } from 'react';
import { UserAuthContext } from '../../contexts/authContext.tsx';

type Props = {
	className?: string;
	restaurantId: string;
};
export const CreateReviewFormContainer: React.FC<Props> = ({ className, restaurantId }) => {
	const [createReview, { isLoading }] = useCreateReviewMutation();
	const { user } = useContext(UserAuthContext);

	if (isLoading) {
		return <div>Creating...</div>;
	}

	if (!user) {
		return null;
	}

	return (
		<ReviewForm
			className={className}
			userName={user?.name}
			onSave={(newReview) =>
				createReview({
					restaurantId,
					newReview: {
						...newReview,
						userId: user.id,
						id: "",
					},
				})
			}
		/>
	);
};
