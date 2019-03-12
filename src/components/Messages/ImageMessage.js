import React from 'react';
import ImageZoom from 'react-medium-image-zoom'

const ImageMessage = (props) => {
    return (
        <ImageZoom
            image={{
                src: props.data.url,
                alt: 'Failed to load',
                className: 'sc-message--image',
            }}
            zoomImage={{
                src: props.data.url,
                alt: 'Failed to load'
            }}

        />
    );
};

export default ImageMessage;