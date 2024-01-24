type Prop = {
	menu: {
		id: string,
		name: string,
		price: number,
		ingredients: string[],
	}[],

}[]

export const Menu = ({menu}: Prop) => {
	return (
		<ul>
			{menu.map((i) => {
				i.
			})}
			<li>{menu[0].name}</li>
			<li>{menu[1].name}</li>
			<li>{menu[2].name}</li>
		</ul>
	);
};

