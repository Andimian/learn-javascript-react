import { Review } from './component.tsx';
import { TReview } from '../../redux/entities/review/thunks/get-reviews.ts';

export const ReviewContainer = ({review}: { review: TReview }) => {
	if (!review) return null;

	return (
		<Review {...review}/>
	);
};