import Sidebar from '../components/Sidebar';
import useGuard from '../hooks/useGuard';

const ChangePasswordPage = () => {
  useGuard(false);

  return (
    <div className='flex'>
      <Sidebar />
      <main></main>
    </div>
  );
};

export default ChangePasswordPage;
