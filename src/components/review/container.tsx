import { Review } from './component.tsx';
import { TReview } from '../reviews/reviews.tsx';

export const ReviewContainer = ({review}: { review: TReview }) => {

	if (!review) return null;

	return (
		<Review {...review}/>
	);
};