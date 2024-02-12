import { Dish } from '../dish/component.tsx';
import { FC } from 'react';

type props = {
  productIds: string[],
}
export const Cart: FC<props> = ({ productIds }) => {
  return (
    <div>
      {productIds?.length
        ? productIds.map((productId) => <Dish dishId={productId} />)
        : "Empty"}
    </div>
  );
};

export class CartContainer {
}