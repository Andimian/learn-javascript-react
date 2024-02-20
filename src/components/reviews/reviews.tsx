import styles from './style.module.scss';
import classNames from 'classnames';
import { ReviewContainer } from '../review/container.tsx';
import { FC } from 'react';
import { TReview } from '../../redux/entities/review/thunks/get-reviews.ts';

export type ReviewsProps = {
    reviews: TReview[],
};

export const Reviews: FC<ReviewsProps> = ({reviews}) => {
    return (
        <ul className={classNames(styles.root)}>
            {reviews.map((review) => (
                <li key={review.id}>
                    <ReviewContainer review={review}/>
                </li>
            ))}
        </ul>
    );
};
