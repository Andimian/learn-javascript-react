import styles from "./style.module.scss";
import classNames from "classnames";
import { FC } from 'react';
import { MenuContainer } from '../menu/container.tsx';
import { ReviewsContainer } from '../reviews/reviews-container.tsx';
import { CreateReviewFormContainer } from '../create-review-form/container.tsx';
import { TUser } from '../../types.tsx';

export type Trestaurant  = {
	name: string,
	menu: string[],
	user: TUser | null,
	id: string,
};

export const Restaurant: FC<Trestaurant> = (props) => {

	return (
		<div>
			<h2>Ресторан {props.name}</h2>
			<h3 className={classNames(styles.menuTitle)}>Меню:</h3>
			<MenuContainer restaurantId={props.id}/>
			<h3>Отзывы:</h3>
			<ReviewsContainer restaurantId={props.id}/>
			<CreateReviewFormContainer restaurantId={props.id}/>
			{/*{props.user && <ReviewForm/>}*/}
		</div>
	);
};

