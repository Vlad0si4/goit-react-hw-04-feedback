import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Title } from './Title/Title';
import { Notification } from './Notification/Notification';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = key => {
    if (key === 'good') {
      setGood(prev => prev + 1);
    } else if (key === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (key === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : ((good / totalFeedback) * 100).toFixed(0);
  };

  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const isFeedbackProvided = countTotalFeedback();

  return (
    <div>
      <Title>
        <FeedbackOption
          option={['good', 'neutral', 'bad']}
          feedback={feedback}
        />
      </Title>
      <div>
        {isFeedbackProvided > 0 ? (
          <Statistics
            option={{ good, neutral, bad }}
            countPositiveFeedbackPercentage={positiveFeedbackPercentage}
            countTotalFeedback={isFeedbackProvided}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
};
