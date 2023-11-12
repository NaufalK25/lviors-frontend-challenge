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
          isActive ? 'bg-teal-300 hover:bg-teal-300 focus:bg-teal-300' : ''
        } nav-link`
      }
    >
      <div className='py-0.5'>{innerHtml}</div>
    </NavLink>
  );
};

export default NavbarLink;
