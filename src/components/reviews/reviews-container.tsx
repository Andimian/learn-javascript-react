import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { Reviews } from "./reviews";
import { FC, useEffect } from "react";
import { getReviews } from '../../redux/entities/review/thunks/get-reviews.ts';
import { selectRestaurantReviewsById } from '../../redux/entities/review/selectors.tsx';

type Props = {
  restaurantId: string;
};

export const ReviewsContainer: FC<Props> = ({restaurantId}) => {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
			dispatch(getReviews(restaurantId))
	}, []);

  const reviewsIds = useSelector((state: RootState) =>
	  selectRestaurantReviewsById(state, restaurantId)
  );

  return (
      <>
        {reviewsIds ? (
			<Reviews reviewsIds={reviewsIds}/>
        ) : ''}
      </>
  );
};
