import { MenuProps } from "../../types/types.tsx";
import { Dish } from '../dish/component.tsx';

export const Menu = (menu: {menu: MenuProps[] | undefined} ) => {
	return (
		<ul>
			{menu.menu && menu.menu.map((dish	) => (
				<li key={dish.id}><Dish {...dish}/></li>
			))}
		</ul>
	)
};

