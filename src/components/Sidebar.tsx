import { Home as HomeIcon } from 'react-feather';
import { Sidebar as FBSidebar } from 'flowbite-react';
import NavbarLink from './NavbarLink';
import LogoutBtn from './LogoutBtn';

const Sidebar = () => {
  return (
    <FBSidebar className='min-h-screen h-screen sticky top-0 bottom-0'>
      <FBSidebar.Items className='flex flex-col justify-between p-4 min-h-screen'>
        <FBSidebar.ItemGroup>
          <FBSidebar.Item>
            <NavbarLink
              to='/'
              innerHtml={<HomeIcon />}
            />
          </FBSidebar.Item>
          <FBSidebar.Item>
            <NavbarLink
              to='/user'
              innerHtml={<p className='py-0.5'>User</p>}
            />
          </FBSidebar.Item>
          <FBSidebar.Item>
            <NavbarLink
              to='/change-password'
              innerHtml={<p className='py-0.5'>Change Password</p>}
            />
          </FBSidebar.Item>
          <FBSidebar.Item>
            <NavbarLink
              to='/Post'
              innerHtml={<p className='py-0.5'>Post</p>}
            />
          </FBSidebar.Item>
        </FBSidebar.ItemGroup>
        <FBSidebar.ItemGroup>
          <FBSidebar.Item>
            <LogoutBtn />
          </FBSidebar.Item>
        </FBSidebar.ItemGroup>
      </FBSidebar.Items>
    </FBSidebar>
  );
};

export default Sidebar;
