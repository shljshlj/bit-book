import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => <PostItem key={index} type={post.type}/>)}
        </div>
    );
};

export default PostList;