import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';
const PostItem = ({post, content}) => {
  return (
   <div className='postItem-wrap' key={post.title}>
      <img className='postItem-cover' src={post.featured_image} alt='cover' />
      <Chip label={post.tags[0].name} />
      <h3>{post.title}</h3>
      <p className='postItem-desc'>{post.summary}</p>
      <footer>
        <div className='postItem-author'>
          <img src={post.author.profile_image} alt='avatar' />
          <div>
            <h6>{post.author.first_name+" "+post.author.last_name}</h6>
            <p>{post.created_at}</p>
          </div>
        </div>
        <Link className='postItem-link' to={`/post/${post.title}`} onClick={()=>{content(post)}}>
          ➝
        </Link>
      </footer>
    </div>
  );
};
export default PostItem;