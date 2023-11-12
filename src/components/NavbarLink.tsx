import { NavLink } from 'react-router-dom';

const NavbarLink = ({
  to,
  innerHtml
}: {
  to: string;
  innerHtml: JSX.Element;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive ? 'bg-blue-700 hover:bg-blue-700 focus:bg-blue-700' : ''
        } nav-link`
      }
    >
      <div className='py-0.5'>{innerHtml}</div>
    </NavLink>
  );
};

export default NavbarLink;
