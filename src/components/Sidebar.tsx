import { FC } from 'react';
import { Home as HomeIcon } from 'react-feather';
import LogoutBtn from './LogoutBtn';
import NavbarLink from './NavbarLink';

type SidebarProps = {
  isSidebarOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        !isSidebarOpen ? '-translate-x-full sm:translate-x-0' : ''
      }`}
    >
      <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col justify-between'>
        <div className='flex flex-col gap-y-2 px-2'>
          <NavbarLink to='/'>
            <HomeIcon />
          </NavbarLink>

          <NavbarLink to='/user'>
            <p className='py-0.5'>User</p>
          </NavbarLink>

          <NavbarLink to='/change-password'>
            <p className='py-0.5'>Change Password</p>
          </NavbarLink>

          <NavbarLink to='/post'>
            <p className='py-0.5'>Post</p>
          </NavbarLink>
        </div>

        <div className='px-2'>
          <LogoutBtn />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
