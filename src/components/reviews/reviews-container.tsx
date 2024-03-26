import { Reviews } from "./reviews";
import { FC, } from "react";
import { useGetReviewsByRestaurantIdQuery } from '../../redux/services/api.ts';
import { useParams } from 'react-router-dom';
import { CreateReviewFormContainer } from '../create-review-form/container.tsx';

export const ReviewsContainer: FC = () => {
	let {restaurantId} = useParams();
	restaurantId = restaurantId ? restaurantId : '';

	const {data: reviews, isFetching} = useGetReviewsByRestaurantIdQuery(restaurantId);

	if (isFetching) return <div>Loading...</div>;
	if (!reviews) return null;

	return (
		<>
			<Reviews reviews={reviews}/>
			<CreateReviewFormContainer restaurantId={restaurantId}/>
		</>
	);
};
