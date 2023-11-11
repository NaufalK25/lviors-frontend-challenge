import { Home as HomeIcon } from 'react-feather';
import { NavLink } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between h-screen w-[20%] p-4 bg-gray-200'>
      <div className='flex flex-col items-center gap-y-5'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `${isActive ? 'bg-primary hover:bg-primary focus:bg-primary' : ''} nav-link`
          }
        >
          <div className='py-0.5'>
            <HomeIcon />
          </div>
        </NavLink>
        <NavLink
          to='/user'
          className={({ isActive }) =>
            `${isActive ? 'bg-primary hover:bg-primary focus:bg-primary' : ''} nav-link`
          }
        >
          <p className='py-0.5'>User</p>
        </NavLink>
        <NavLink
          to='/change-password'
          className={({ isActive }) =>
            `${isActive ? 'bg-primary hover:bg-primary focus:bg-primary' : ''} nav-link`
          }
        >
          <p className='py-0.5'>Change Password</p>
        </NavLink>
        <NavLink
          to='/post'
          className={({ isActive }) =>
            `${isActive ? 'bg-primary hover:bg-primary focus:bg-primary' : ''} nav-link`
          }
        >
          <p className='py-0.5'>Post</p>
        </NavLink>
      </div>
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
