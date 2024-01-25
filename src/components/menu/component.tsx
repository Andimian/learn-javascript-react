import {MenuProps} from "../../types/types";
export const Menu = (menu: MenuProps) => {
	console.log(menu.name);
	return (
		<div>
			{ menu.name}
		</div>
	);
};

