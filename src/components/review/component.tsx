import { TReview } from '../../redux/entities/review/thunks/get-reviews.ts';

export const Review = ({rating, text}: TReview) => {
	return (
		<div>
			<div>
				<b>★{rating}</b>
			</div>
			<p>{text}</p>
		</div>
	)
};
