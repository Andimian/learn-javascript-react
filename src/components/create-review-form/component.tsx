import { ReviewForm } from '../review-form/component.tsx';
import { useCreateReviewMutation } from '../../redux/services/api.ts';

type Props = {
	className?: string;
	restaurantId: string;
};
export const CreateReviewForm: React.FC<
	Props
> = ({ className, restaurantId }) => {
	const [createReview, { isLoading }] = useCreateReviewMutation();

	if (isLoading) {
		return <div>Creating...</div>;
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
