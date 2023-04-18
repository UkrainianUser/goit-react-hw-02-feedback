import React from "react";
import css from './App.module.css';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends React.Component {

	state = {
		good: 0,
		neutral: 0,
		bad: 0
	};

	handleGood = ()=>{
		this.setState(prevState => ({
				good: prevState.good + 1,
		}));
	};
	handleNeutral = ()=>{
		this.setState(prevState => ({
				neutral: prevState.neutral + 1,
			}));
	};
	handleBad = ()=>{
		this.setState(prevState => ({
				bad: prevState.bad + 1,
			}));
	};
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

	render () {
		const {good, neutral, bad} = this.state;
		const total = this.countTotalFeedback();

		return (<div className={css.feedback}>
			<p className={css.feedback__declaration}>Please leave feedback</p>
			<div className={css.feedback__action}>
				<button className={css.feedback__btn} type='button' onClick={this.handleGood}>Good</button>
				<button className={css.feedback__btn} type='button' onClick={this.handleNeutral}>Neutral</button>
				<button className={css.feedback__btn} type='button' onClick={this.handleBad}>Bad</button>
			</div>

			{total > 0 ? (<Statistics 
				onGood={good}
				onNeutral={neutral} 
				onBad={bad} 
				onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} 
				onCountTotalFeedback={this.countTotalFeedback} 
				/>
			  ) : (<Notification
				message="There is no feedback" 
				/>
				)}
		</div>)
	}
};


export default App;