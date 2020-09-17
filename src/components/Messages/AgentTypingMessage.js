import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

const AgentTypingMessage = () => {
  return (
    <div className="sc-message--agent-typing">
      <PulseLoader
        size={6}
        margin={1}
        color={'#cccccc'}
        loading={true}
      />
      <span>Agent is typing</span>
    </div>
  );
};

export default AgentTypingMessage;
