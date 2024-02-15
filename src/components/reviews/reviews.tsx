import { Review } from '../review/component.tsx';
import styles from './style.module.scss';
import classNames from 'classnames';

export type ReviewsProps = {
    reviewsIds: string[],
};

export const Reviews = ({reviewsIds}: ReviewsProps) => {
    return (
        <ul className={classNames(styles.root)}>
            {reviewsIds.map((reviewId) => (
                <li key={reviewId}><Review reviewId={reviewId}/></li>
            ))}
        </ul>
    );
};
