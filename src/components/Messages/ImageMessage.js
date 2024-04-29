import React from 'react';


const ImageMessage = (props) => {
  return (
    <img src={props.data.url} alt={props.data.alt} width={props.data.width} height={props.data.height} />
  );
};

export default ImageMessage;