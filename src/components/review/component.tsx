import classNames from "classnames";
import styles from "./styles.module.scss";
import { IReview, TUser } from "../../types";
import { useState } from "react";
import { UpdateReviewFormContainer } from '../update-review-form/container.tsx';

type Props = {
	review: IReview;
	user: TUser;
};

export const Review: React.FC<Props> = ({ review, user }) => {
	const [isEditMode, setIsEditMode] = useState(false);
	return (
		<div
			className={classNames({ [styles.edit_mode]: !isEditMode }, styles.root)}
		>
			{isEditMode ? (
				<UpdateReviewFormContainer
					review={review}
					user={user}
					onUpdateFinished={() => {
						setIsEditMode(false);
					}}
				/>
			) : (
				<div>
					<div>
						<b>★{review.rating}</b> {user?.name}
					</div>
					<p>{review.text}</p>
				</div>
			)}
			{!isEditMode && (
				<button
					onClick={() => setIsEditMode(!isEditMode)}
				>
					Edit
				</button>
			)}
		</div>
	);
};
