import { Reviews } from "./reviews";
import { FC, } from "react";
import { useGetReviewsByRestaurantIdQuery } from '../../redux/services/api.ts';

type Props = {
	restaurantId: string;
};

export const ReviewsContainer: FC<Props> = ({restaurantId}) => {
	const {data: reviews, isFetching} = useGetReviewsByRestaurantIdQuery(restaurantId);

	if (isFetching) return <div>Loading...</div>;
	if (!reviews) return null;

	return (
		<>
			<Reviews reviews={reviews}/>
		</>
	);
};
