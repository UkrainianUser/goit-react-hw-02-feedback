import React from "react";
import css from './App.module.css';
import Statistics from './statistics/Statistics';
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from './notification/Notification';
import Section from "./section/Section";

class App extends React.Component {

	state = {
		good: 0,
		neutral: 0,
		bad: 0
	};

	handleClick = (option) => {
		this.setState(prevState => ({
			[option]: prevState[option] + 1,
		}));
	};

	// handleGood = ()=>{
	// 	this.setState(prevState => ({
	// 			good: prevState.good + 1,
	// 	}));
	// };
	// handleNeutral = ()=>{
	// 	this.setState(prevState => ({
	// 			neutral: prevState.neutral + 1,
	// 		}));
	// };
	// handleBad = ()=>{
	// 	this.setState(prevState => ({
	// 			bad: prevState.bad + 1,
	// 		}));
	// };
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
		const options = ['good', 'neutral', 'bad'];

		return (<div className={css.feedback}>
			<Section title="Please leave feedback">
				<FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />
			</Section>

			{total > 0 ? (
				<Section title="Statistics">
					<Statistics 
						onGood={good}
						onNeutral={neutral} 
						onBad={bad} 
						onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} 
						onCountTotalFeedback={this.countTotalFeedback} 
					/>
				</Section>
			) : (<Notification message="There is no feedback" />)}
		</div>)
	}
};


export default App;