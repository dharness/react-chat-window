import React from 'react';

// displays a centre aligned message to indicate the chat status
const StatusMessage = props => {
  return (
    <div className="sc-message--status">
      <span>{props.data.text}</span>
    </div>
  );
};

export default StatusMessage;
