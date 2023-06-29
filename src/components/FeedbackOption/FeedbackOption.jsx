import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOption = ({ option, feedback }) => {
  return (
    <ul>
      {option.map(key => {
        return (
          <li key={key}>
            <button type="button " onClick={() => feedback(key)}>
              {key}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOption.propType = {
  option: PropTypes.array.isRequired,
  feedback: PropTypes.func.isRequired,
};
