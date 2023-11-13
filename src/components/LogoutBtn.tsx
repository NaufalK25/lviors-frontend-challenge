import { useNavigate } from 'react-router-dom';
import { LogOut as LogoutIcon } from 'react-feather';
import { logout } from '../utils/auth';
import { createSuccessToast } from '../utils/toast';

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogoutBtnClick = async () => {
    try {
      await logout();
      window.localStorage.removeItem('user');
      navigate('/login');
      setTimeout(() => {
        createSuccessToast('Successfully logged out!');
      }, 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className='hover:bg-gray-400 focus:bg-gray-400 rounded-lg py-3 outline-none flex items-center justify-center w-full'
      onClick={handleLogoutBtnClick}
    >
      <LogoutIcon height={15} />
      <p>Logout</p>
    </button>
  );
};

export default LogoutBtn;
