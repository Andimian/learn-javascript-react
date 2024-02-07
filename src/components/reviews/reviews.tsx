import { Review } from '../review/component.tsx';
import styles from './style.module.scss';
import classNames from 'classnames';


export type ReviewsProps = {
    reviews: string[],
};

export const Reviews = ({reviews}: ReviewsProps) => {
    return (
        <ul className={classNames(styles.root)}>
            {reviews && reviews.map((reviewId) => (
                <li key={reviewId}><Review reviewId={reviewId}/></li>
            ))}
        </ul>
    );
};
