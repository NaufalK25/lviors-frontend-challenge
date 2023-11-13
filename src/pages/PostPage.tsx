import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OutletContext } from '../components/Layout';
import Pagination from '../components/Pagination';
import PostsGrid from '../components/PostsGrid';
import SearchPostInput from '../components/SearchPostInput';
import useGuard from '../hooks/useGuard';
import useUserProfile from '../hooks/useUserProfile';
import { getAllPost } from '../utils/post';
import { GetAllPostResponse, Post } from '../types/post';

const HomePage = () => {
  useGuard(false);

  const setIsLoading = useOutletContext<OutletContext>();
  const userProfile = useUserProfile(setIsLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const getPost = async () => {
      try {
        setIsLoading(true);
        const responseData = (await getAllPost(
          currentPage
        )) as GetAllPostResponse;
        setTotalPage(
          Math.ceil(
            responseData.pagination.total / +responseData.pagination.limit
          )
        );

        if (userProfile) {
          setPosts(
            responseData.data.filter(
              post => post.user.username === userProfile.username
            )
          );
        }
      } catch (err) {
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    getPost();
  }, [currentPage, userProfile, setIsLoading]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <SearchPostInput />

      <PostsGrid posts={posts} />

      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
