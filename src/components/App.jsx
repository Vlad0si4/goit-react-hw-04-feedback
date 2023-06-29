import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Title } from './Title/Title';
import { Notification } from './Notification/Notification';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : ((good / totalFeedback) * 100).toFixed(0);
  };

  render() {
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const isFeedbackProvided = this.countTotalFeedback();

    return (
      <div>
        <Title>
          <FeedbackOption
            option={Object.keys(this.state)}
            feedback={this.feedback}
          />
        </Title>
        <div>
          {isFeedbackProvided > 0 ? (
            <Statistics
              option={Object.entries(this.state)}
              countPositiveFeedbackPercentage={positiveFeedbackPercentage}
              countTotalFeedback={isFeedbackProvided}
            />
          ) : (
            <Notification />
          )}
        </div>
      </div>
    );
  }
}
