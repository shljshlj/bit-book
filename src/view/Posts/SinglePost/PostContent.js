import React from 'react';
import VideoPost from './VideoPost';
import TextPost from './TextPost';
import ImagePost from './ImagePost';

const postContent = {
    video: (content) => <VideoPost content={content} />,
    image: (content) => <ImagePost content={content} />,
    text: (content) => <TextPost content={content} />
}

const PostContent = ({ type, content }) => {

    return (
        <>
            {postContent[type](content)}
        </>
    );
};

export default PostContent;