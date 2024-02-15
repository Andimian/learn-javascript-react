import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../index.tsx';


export type TReview = {
    id: string;
    userId: string;
    text: string;
    rating: number;
}

export const getReviews = createAsyncThunk<TReview[], string, { state: RootState }>(
  "review/getReviews",
  async (restaurantId: string) => {
    const response = await fetch(
        `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    return result;
  },
  {
      // condition: (restaurantId, { getState }) => {
      //     const restaurantReviewsIds: string[] = selectRestaurantReviewsById(
      //         getState(),
      //         restaurantId
      //     );
      //     const reviewsIds = selectReviewsIds(getState());
      //     return !restaurantReviewsIds.every((id) => reviewsIds.includes(id));
      // },

    // condition: (_, { getState }) => !selectorReviewIds(getState())?.length,
  }
);
