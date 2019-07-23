import React from 'react';
import FileIcon from './../icons/FileIcon';


const FileMessage = (props) => {
  return (
    <a className="sc-message--file" href={props.data.url} download={props.data.fileName}>
      <FileIcon />
      <p>{props.data.fileName}</p>
    </a>
  );
};

export default FileMessage;
