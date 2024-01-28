import { ReviewProps } from "../../types/types";
import { Review } from '../review/component.tsx';

export const Reviews = ({reviews}: { reviews: ReviewProps[] | undefined }) => {
    return (
        <ul>
            {reviews && reviews.map((review) => (
                <li key={review.id}><Review {...review}/></li>
            ))}
        </ul>
    );
};
