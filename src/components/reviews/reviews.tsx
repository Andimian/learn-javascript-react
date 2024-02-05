import { ReviewProps } from "../../types/types";
import { Review } from '../review/component.tsx';
import styles from './style.module.scss';
import classNames from 'classnames';

export const Reviews = ({reviews}: { reviews: ReviewProps[] | undefined }) => {
    return (
        <ul className={classNames(styles.root)}>
            {reviews && reviews.map((review) => (
                <li key={review.id}><Review {...review}/></li>
            ))}
        </ul>
    );
};
