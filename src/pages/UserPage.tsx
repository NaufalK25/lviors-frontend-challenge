import Sidebar from '../components/Sidebar';
import useGuard from '../hooks/useGuard';

const UserPage = () => {
  useGuard(false);

  return (
    <div className='flex'>
      <Sidebar />
      <main></main>
    </div>
  );
};

export default UserPage;
