import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectorReviewIds } from '../selectors.tsx';
import { RootState } from '../../../index.tsx';


export type TReview = {
    id: string;
    userId: string;
    text: string;
    rating: number;
}

export const getReviews = createAsyncThunk<TReview[], string, { state: RootState }>(
  "review/getReviews",
  async (restaurantId) => {
    const response = await fetch(
        `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    return result;
  },
  {
    condition: (_, { getState }) => !selectorReviewIds(getState())?.length,
  }
);
