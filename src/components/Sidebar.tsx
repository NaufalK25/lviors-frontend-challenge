import { Home as HomeIcon } from 'react-feather';
import NavbarLink from './NavbarLink';
import LogoutBtn from './LogoutBtn';

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between h-screen w-[20%] p-4 bg-gray-200'>
      <div className='flex flex-col items-center gap-y-5'>
        <NavbarLink
          to='/'
          innerHtml={<HomeIcon />}
        />
        <NavbarLink
          to='/user'
          innerHtml={<p className='py-0.5'>User</p>}
        />
        <NavbarLink
          to='/change-password'
          innerHtml={<p className='py-0.5'>Change Password</p>}
        />
        <NavbarLink
          to='/post'
          innerHtml={<p className='py-0.5'>Post</p>}
        />
      </div>
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
