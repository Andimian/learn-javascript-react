import { useSelector } from "react-redux";
import { selectCartProductIds } from "../../redux/ui/cart";
import { Cart }                 from "./component.js";
import { RootState } from '../../redux';

export const CartContainer = () => {
    const productIds = useSelector(selectCartProductIds);
	const amount = useSelector((state: RootState) =>
		selectTotalDishesAmount(state)
	);
	return <Cart amount={amount} />;
};
