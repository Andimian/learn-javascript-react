import { useSelector } from 'react-redux';
import { selectorReviewById } from '../../redux/entities/review/selectors.tsx';
import { RootState } from '../../redux';
import { Review } from './component.tsx';

export const ReviewContainer = ({reviewId}: {reviewId: string}) => {
	const review = useSelector((state: RootState) => selectorReviewById(state, reviewId));

	if (!review) return null;

	return (
		<Review {...review}/>
	);
};