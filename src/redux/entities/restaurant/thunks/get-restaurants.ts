import { createAsyncThunk } from '@reduxjs/toolkit';
import { TRestaurant } from '../index.tsx';
import { RootState } from '../../../index.tsx';
import { selectorRestaurantIds } from '../selectors.tsx';

export const getRestaurants = createAsyncThunk<
    TRestaurant[],
    void,
    { state: RootState }
>(
  "restaurant/getUsers",
  async () => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = await response.json();
    return result;
  },
  {
    condition: (_, { getState }) => !selectorRestaurantIds(getState()).length,
  }
);
