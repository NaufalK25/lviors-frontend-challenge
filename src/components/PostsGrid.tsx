import { FC } from 'react';
import { Post } from '../types/post';
import PostCard from './PostCard';

type PostsGridProps = {
  posts: Post[];
};

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 p-8'>
      {posts.map(post => (
        <PostCard
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostsGrid;
