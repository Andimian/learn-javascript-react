import { useSelector } from "react-redux";
import { selectCartProductIds } from "../../redux/ui/cart";
import { Cart }                 from "./component.js";
import { selectorDishById } from '../../redux/entities/dish/selectors.tsx';
import { RootState } from '../../redux';

export const CartContainer = () => {
    const productIds = useSelector(selectCartProductIds);
	return <Cart productIds={productIds} />;
};
