import { Review } from '../review/component.tsx';
import styles from './style.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getReviews } from '../../redux/entities/review/thunks/get-reviews.ts';

export type ReviewsProps = {
    reviews: string[],
};

export const Reviews = ({reviews}: ReviewsProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch((getReviews))
    }, []);
    return (
        <ul className={classNames(styles.root)}>
            {reviews && reviews.map((reviewId) => (
                <li key={reviewId}><Review reviewId={reviewId}/></li>
            ))}
        </ul>
    );
};
