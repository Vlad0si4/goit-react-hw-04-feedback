import React from 'react';

export const Title = props => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      {props.children}
      <h2>Statistics</h2>
    </div>
  );
};
