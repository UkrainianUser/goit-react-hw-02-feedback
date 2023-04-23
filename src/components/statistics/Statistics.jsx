import React from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ onGood, onNeutral, onBad, onCountPositiveFeedbackPercentage, onCountTotalFeedback}) => {
	return (
		<>
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
			Total: {onCountTotalFeedback()}
		</p>
		<p className={css.feedback__text}>
			Positive feedback: {onCountPositiveFeedbackPercentage()}%
		</p>
	</div>
	</>
	)
}

Statistics.prototype = {
	onGood: PropTypes.number.isRequired,
	onNeutral: PropTypes.number.isRequired,
	onBad: PropTypes.number.isRequired,
	onCountPositiveFeedbackPercentage: PropTypes.func.isRequired,
	onCountTotalFeedback: PropTypes.func.isRequired,
}

export default Statistics;