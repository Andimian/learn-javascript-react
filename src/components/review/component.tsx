import { useSelector } from 'react-redux';
import { selectorReviewById } from '../../redux/entities/review/selectors.tsx';
import { RootState } from '../../redux';

export const Review = ({reviewId}: {reviewId: string}) => {
	const review = useSelector((state: RootState) => selectorReviewById(state, reviewId))
	return (
		<div>
			{review.text}
		</div>
	);
};
