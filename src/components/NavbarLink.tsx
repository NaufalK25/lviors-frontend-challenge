import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type NavbarLinkProps = {
  to: string;
  children: ReactNode;
};

const NavbarLink: FC<NavbarLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive ? 'bg-blue-700 hover:bg-blue-700 focus:bg-blue-700' : ''
        } nav-link`
      }
    >
      <div className='py-0.5'>{children}</div>
    </NavLink>
  );
};

export default NavbarLink;
