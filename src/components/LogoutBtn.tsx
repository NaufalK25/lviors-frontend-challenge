import { LogOut as LogoutIcon } from 'react-feather';
import { logout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogoutBtnClick = async () => {
    try {
      await logout();
      window.localStorage.removeItem('user');
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className='hover:bg-gray-400 focus:bg-gray-400 rounded-lg p-2 outline-none'
      onClick={handleLogoutBtnClick}
    >
      <div className='py-0.5 flex items-center justify-center uppercase'>
        <LogoutIcon height={10} />
        <p>Logout</p>
      </div>
    </button>
  );
};

export default LogoutBtn;
