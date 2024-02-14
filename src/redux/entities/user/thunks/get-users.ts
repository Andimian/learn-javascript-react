import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../index.tsx';
import { selectorUsertIds } from '../selectors.tsx';

type TUser = {
    id: string;
    name: string;
}

export const getUsers = createAsyncThunk<TUser[], string, { state: RootState }>(
  "restaurant/getUsers",
  async () => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = await response.json();
    return result;
  },
  {
    condition: (_, { getState }) => !selectorUsertIds(getState())?.length,
  }
);
