import { AxiosError } from 'axios';
import { FC, useState } from 'react';
import { Heart as LikeIcon } from 'react-feather';
import { Card } from 'flowbite-react';
import { likePost, unlikePost } from '../utils/post';
import { createErrorToast, createSuccessToast } from '../utils/toast';
import { ErrorData } from '../types/error';
import { Post } from '../types/post';

type PostCardProps = {
  post: Post;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  const [isPostLiked, setIsPostLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handlePostLikeBtnClick = async (
    event: React.MouseEvent,
    postId: number,
    isPostLiked: boolean
  ) => {
    event.preventDefault();

    try {
      if (isPostLiked) {
        await unlikePost(postId);
        createSuccessToast('Successfully unliked post');
        setIsPostLiked(false);
        setLikeCount(prevState => prevState - 1);
      } else {
        await likePost(postId);
        createSuccessToast('Successfully liked post');
        setIsPostLiked(true);
        setLikeCount(prevState => prevState + 1);
      }
    } catch (err) {
      if (err) {
        const axiosError = err as AxiosError;
        if (axiosError.response) {
          const axiosErrorData = axiosError.response.data as ErrorData;
          createErrorToast(axiosErrorData.message.split(', ')[0]);
        }
      }
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 1500)
    }
  };

  return (
    <Card
      key={post.id}
      className='max-w-sm'
      imgAlt={post.caption}
      imgSrc={post.image}
    >
      <div className='flex flex-col px-2'>
        <div className='flex items-center gap-x-1 p-2'>
          <button
            onClick={event =>
              handlePostLikeBtnClick(event, post.id, post.liked)
            }
          >
            <LikeIcon
              size={15}
              fill={isPostLiked ? 'red' : 'white'}
            />
          </button>

          <p className='text-sm'>{likeCount}</p>
        </div>

        <p className='font-bold'>{post.user.name}</p>

        <p>{post.caption}</p>
      </div>
      <p className='font-normal text-blue-700 dark:text-blue-400 w-fit p-2'>
        {post.tags}
      </p>
    </Card>
  );
};

export default PostCard;
