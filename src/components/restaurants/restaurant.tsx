import { Menu } from '../menu/component.tsx';
import styles from "./style.module.scss";
import classNames from "classnames";
import { ReviewForm } from "../review-form/component.tsx";
import { FC, useContext, useEffect } from 'react';
import { UserAuthContext } from '../../contexts/authContext.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectorRestaurantById } from '../../redux/entities/restaurant/selectors.tsx';
import { RootState } from '../../redux';
import { Reviews } from '../reviews/reviews.tsx';
import { getReviews } from '../../redux/entities/review/thunks/get-reviews.ts';

export type restaurantProps  = {
	id: string,
};

export const Restaurant: FC<restaurantProps> = ({id}) => {
	const dispatch = useDispatch();
	const { user } = useContext(UserAuthContext);
	const rest = useSelector((state: RootState) => selectorRestaurantById(state, id));
	useEffect(() => {
		dispatch(getReviews(id))
	}, []);

	return (
		<div>
			<h2>Ресторан {rest.name}</h2>
			<h3 className={classNames(styles.menuTitle)}>Меню:</h3>
			<Menu menu={rest.menu}/>
			<h3>Отзывы:</h3>
			<Reviews reviews={rest.reviews}/>
			{user && <ReviewForm/>}
		</div>
	);
};

