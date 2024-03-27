import { Review } from './component.tsx';
import { TReview } from '../../redux/entities/review/thunks/get-reviews.ts';
import { useGetUsersQuery } from '../../redux/services/api.ts';
import { IReview } from '../../types.tsx';

type Props = {
	review: IReview;
};

export const ReviewContainer: React.FC<Props> = ({review}: { review: TReview }) => {
	const { data: user, isLoading } = useGetUsersQuery(undefined, {
		selectFromResult: (result) => ({
			...result,
			data: result.data?.find((userItem) => review?.userId === userItem.id),
		}),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!review || !user) {
		return null;
	}

	return (
		<Review review={review} user={user} />
	);
};