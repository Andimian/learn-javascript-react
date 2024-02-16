import { Dish } from '../dish/component.tsx';

export type MenuProps = {
	dishIds: string[],
};

export const Menu = ({dishIds}: MenuProps ) => {
	return (
		<ul>
			{dishIds.map((dishId	) => (
				<li key={dishId}><Dish dishId={dishId} /></li>
			))}
		</ul>
	)
};
