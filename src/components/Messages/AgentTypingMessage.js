import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";

const AgentTypingMessage = props => {
  return (
    <div className="sc-message--agent-typing">
      <PulseLoader
        css={override}
        size={6}
        margin={1}
        color={'#cccccc'}
        loading={true}
      />
      <span>Agent Typing</span>
    </div>
  );
};

export default AgentTypingMessage;
