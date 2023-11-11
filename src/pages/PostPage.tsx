import Sidebar from '../components/Sidebar';
import useGuard from '../hooks/useGuard';

const PostPage = () => {
  useGuard(false);

  return (
    <div className='flex'>
      <Sidebar />
      <main></main>
    </div>
  );
};

export default PostPage;
