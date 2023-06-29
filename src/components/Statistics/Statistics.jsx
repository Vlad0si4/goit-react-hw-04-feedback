import PropTypes from 'prop-types';

export const Statistics = ({
  option,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul>
      {option.map(([key, value]) => {
        return (
          <li key={key}>
            {key}: {value}
          </li>
        );
      })}

      <li>total : {countTotalFeedback}</li>
      <li>positive feedback: {countPositiveFeedbackPercentage}%</li>
    </ul>
  );
};

Statistics.propType = {
  option: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
