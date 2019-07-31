import React from 'react';

const ImagePost = ({ content }) => {
    return (
        <div className="image">
            <img src={content} alt="some description" />
        </div>
    );
};

export default ImagePost;