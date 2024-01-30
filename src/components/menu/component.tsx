import { MenuProps } from "../../types/types.tsx";

export const Menu = (menu: {menu: MenuProps[]}) => {
	return (
		<>
			<h3>Меню:</h3>
			<ul>
				{menu.menu.map((item) => (
					<li>{item.name}</li>
				))}
			</ul>
		</>
	)
};

