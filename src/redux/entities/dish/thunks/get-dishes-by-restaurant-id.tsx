import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { DishType } from '../../../../components/dish/component.tsx';
import { selectRestaurantMenuById } from '../../restaurant/selectors.tsx';
import { selectorDishIds } from '../selectors.tsx';

export const getDishesByRestaurantId = createAsyncThunk<
    DishType[],
  string,
  { state: RootState }
>(
  "restaurant/getDishesByRestaurantId",
  async (restaurantId: string) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
      {}
    );
    const result = await response.json();
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurantDishesIds: string[] = selectRestaurantMenuById(
        getState(),
        restaurantId
      );
      const dishIds = selectorDishIds(getState());

      return !restaurantDishesIds.every((id) => dishIds.includes(id));
    },
  }
);
