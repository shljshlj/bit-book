import React from 'react';

const ImagePost = ({ content }) => {
    return (
        <div className="image">
            <img src={content} />
        </div>
    );
};

export default ImagePost;