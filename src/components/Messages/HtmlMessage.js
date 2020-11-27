import React from 'react';

const HTMLMessage = (props) => {
  return (
    <div
      className="sc-message--text"
      dangerouslySetInnerHTML={{ __html: props.data.text } }
    />
  );
};

export default HTMLMessage;
