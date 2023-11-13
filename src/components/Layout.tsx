import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu as MenuIcon } from 'react-feather';
import { ToastContainer } from 'react-toastify';
import Sidebar from './Sidebar';

export type OutletContext = React.Dispatch<React.SetStateAction<boolean>>;

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <ToastContainer />
      <div className='relative flex'>
        {loading && (
          <div className='bg-blue-700 h-2 loading absolute top-0 z-50'></div>
        )}

        <button
          onClick={handleToggleSidebar}
          type='button'
          className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
        >
          <span className='sr-only'>Open sidebar</span>
          <MenuIcon />
        </button>
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>
      <main
        onClick={handleToggleSidebar}
        className='flex justify-center items-center flex-grow'
      >
        <Outlet context={setLoading satisfies OutletContext} />
      </main>
    </>
  );
};

export default Layout;
