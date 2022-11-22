import React from 'react';

const PostItem = ({post}) => {
    return (
        <div className='postItem-wrap' key={post.title}>
            <h3>{post.title}</h3>
            <p className='postItem-desc'>{post.bodytext}</p>
            <footer>
                <div className='postItem-author'>
                    <div>
                        <p>{post.create_date}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default PostItem;