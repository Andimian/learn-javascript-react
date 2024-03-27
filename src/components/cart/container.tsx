import { useSelector } from "react-redux";
import { selectCartProductIds } from "../../redux/ui/cart";
import { Cart }                 from "./component.js";

export const CartContainer = () => {
	/* productIds лежат по ресторанам примерно так:
	* ресторан1: [блюдо1, блюдо2],
	* */
    const productIds = useSelector(selectCartProductIds);

	return <Cart productIds={productIds} />;
};
