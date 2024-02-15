import { TReview } from '../../redux/entities/review/thunks/get-reviews.ts';

export const Review = ({text, rating}: TReview) => {
	console.log('f');
	return (
		<div>
			<div>
				<b>★{rating}</b>
			</div>
			<p>{text}</p>
		</div>
	)
};
