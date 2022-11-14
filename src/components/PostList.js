import React from 'react';
import PostItem from './PostItem';
const PostList = ({ posts, content }) => {
  return (
    <div className='blogList-wrap'>
      {posts.map((post) => (
        <PostItem post={post} content={content}/>
      ))}
    </div>
  );
};
export default PostList;