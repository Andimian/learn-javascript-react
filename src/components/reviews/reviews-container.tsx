import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { Reviews } from "./reviews";
import { FC, useEffect, useState } from "react";
import {  getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews.ts';
import { selectRestaurantReviewsById } from '../../redux/entities/review/selectors.tsx';
import { selectIsLoading } from '../../redux/ui/request';

type Props = {
	restaurantId: string;
};

export const ReviewsContainer: FC<Props> = ({restaurantId}) => {
	// Этот прикол для отображения загрузки
	const [requestId, setRequestId] = useState<string | null>(null);
	const isLoading = useSelector((state: RootState) => selectIsLoading(state, requestId));

	const reviewIds = useSelector((state: RootState) => selectRestaurantReviewsById(state, restaurantId))
	const dispatch = useDispatch<AppDispatch>();


	/* Тут прикол с зависимостями, нам для каждого ресторана надо грузить новые отзывы, поэтому укажем restaurantId */
	useEffect(() => {
		setRequestId(dispatch(getReviewsByRestaurantId(restaurantId)).requestId)
	}, [restaurantId]);

	if (!reviewIds.length) return null;

	return (
		<>
			{isLoading
				? ('Loading...')
				: <Reviews reviewsIds={reviewIds}/>
			}
		</>
	);
};
