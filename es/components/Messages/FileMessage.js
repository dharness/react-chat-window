import React, { Component } from 'react';
import FileIcon from './../icons/FileIcon';

var FileMessage = function FileMessage(props) {
    return React.createElement(
        'a',
        { className: 'sc-message--file', href: props.data.url, download: props.data.fileName },
        React.createElement(FileIcon, null),
        React.createElement(
            'p',
            null,
            props.data.fileName
        )
    );
};

export default FileMessage;