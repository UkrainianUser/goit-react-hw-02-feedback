import React from "react";
import css from './Statistics.module.css';

const Statistics = ({ onGood, onNeutral, onBad, onCountPositiveFeedbackPercentage, onCountTotalFeedback}) => {
	<>
		<p className={css.feedback__declaration}>Statistics</p>
	<div className={css.feedback__stat}>
		<p className={css.feedback__text}>
			Good: {onGood}
		</p>
		<p className={css.feedback__text}>
			Neutral: {onNeutral}
		</p>
		<p className={css.feedback__text}>
			Bad: {onBad}
		</p>
		<p className={css.feedback__text}>
			Total: {onCountTotalFeedback}
		</p>
		<p className={css.feedback__text}>
			Positive feedback: {onCountPositiveFeedbackPercentage}%
		</p>
	</div>
	</>
}

export default Statistics;