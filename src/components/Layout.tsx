import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export type OutletContext = React.Dispatch<React.SetStateAction<boolean>>;

const Layout = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className='relative'>
        {loading && (
          <div className='bg-blue-700 h-2 loading absolute top-0 z-10'></div>
        )}
      </div>

      <div className='flex min-h-screen'>
        <Sidebar />
        <Outlet context={setLoading satisfies OutletContext} />
      </div>
    </>
  );
};

export default Layout;
