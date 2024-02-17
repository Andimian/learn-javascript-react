import { DishContainer } from '../dish/container.tsx';

export type MenuProps = {
	dishIds: string[],
};

export const Menu = ({dishIds}: MenuProps ) => {
	return (
		<ul>
			{dishIds.map((dishId	) => (
				<li key={dishId}><DishContainer dishId={dishId} /></li>
			))}
		</ul>
	)
};
