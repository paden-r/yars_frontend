import React from 'react';
import PostListItem from "./PostListItem";
const PostList = ({ posts }) => {
  return (
    <div className='blogList-wrap'>
      {posts.map((post) => (
        <PostListItem key={post.post_id} obj={post}/>
      ))}
    </div>
  );
};
export default PostList;