import { ReviewProps } from "../../types/types";

export const Reviews = ({reviews}: { reviews: ReviewProps[] }) => {
    return (
        <>
            <h3>Отзывы:</h3>
            <ul>
                {reviews.map((review) => (
                    <li>{review.text}</li>
                ))}
            </ul>
        </>
    );
};
