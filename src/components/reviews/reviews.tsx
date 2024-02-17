import styles from './style.module.scss';
import classNames from 'classnames';
import { ReviewContainer } from '../review/container.tsx';

export type ReviewsProps = {
    reviewsIds: string[],
};

export const Reviews = ({reviewsIds}: ReviewsProps) => {
    return (
        <ul className={classNames(styles.root)}>
            {reviewsIds.map((reviewId) => (
                <li key={reviewId}><ReviewContainer reviewId={reviewId}/></li>
            ))}
        </ul>
    );
};
