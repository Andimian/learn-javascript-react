import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../index.tsx';
import { selectorReviewIds, selectRestaurantReviewsById } from '../selectors.tsx';

export type TReview = {
    id: string;
    userId: string;
    text: string;
    rating: number;
}

export const getReviewsByRestaurantId = createAsyncThunk<
    TReview[],
    string,
    { state: RootState }
>(
  "review/getReviewsByRestId",
  async (restaurantId: string) => {
    const response = await fetch(
        `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    return result;
  },
  {
      condition: (restaurantId, { getState }) => {
          const restaurantReviewsIds: string[] = selectRestaurantReviewsById(
              getState(),
              restaurantId
          );
          const reviewsIds = selectorReviewIds(getState());
          return !restaurantReviewsIds.every((id) => reviewsIds.includes(id));
      },
  }
);
