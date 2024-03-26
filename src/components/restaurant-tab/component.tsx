import { Button } from '../button/component.tsx';
import { FC } from 'react';
import { IRestaurant } from '../../types.tsx';
import styles from './style.module.scss';
import classNames from 'classnames';

type Props = {
	restaurant: IRestaurant,
	isActive: boolean,
}

export const Tab: FC<Props> = ({restaurant, isActive}) => {
	return (
		<Button
			title={restaurant.name}
			className={classNames({
				[styles.selected]: isActive,
			})}
		/>
	);
};
