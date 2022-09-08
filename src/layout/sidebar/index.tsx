import './sidebar.scss';

import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { menuToggle } from '../../store/features/appSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { NavLinkMenu } from './navLink';

export const Sidebar = () => {
  const menuState = useAppSelector((state) => state.app.menuOpen);
  const dispatch = useAppDispatch();

  const isOpenMenu = classNames({ ' show': menuState });
  const menus = [
    {
      icon: 'fa-solid fa-house-user',
      title: 'Home',
      url: '/',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Dasboard',
      url: '/a',
      subMenu: [
        {
          icon: 'fa-solid fa-shield-halved',
          title: 'Dasboard emre',
          url: '/b',
        },
      ],
    },
    {
      icon: 'fa-solid fa-image',
      title: 'About',
      url: '/c',
      subMenu: [
        {
          icon: 'fa-solid fa-shield-halved',
          title: 'Dasboard emre',
          url: '/d',
        },
      ],
    },
    {
      icon: 'fa-solid fa-calendar-days',
      title: 'Contact',
      url: '/e',
    },
  ];
  return (
    <div className="sidebar position-relative">
      <span className="sidebar-toggle c-pointer" onClick={() => dispatch(menuToggle())}>
        {menuState ? (
          <i className="fa-solid fa-arrow-left"></i>
        ) : (
          <i className="fa-solid fa-arrow-right"></i>
        )}
      </span>
      <div className={`kolaygelsin-navbar ${isOpenMenu}`}>
        <nav className="nav">
          <Link to="/" className="nav_logo">
            <span className="c-pointer">
              {menuState ? (
                <img src="logo.png" height={50} alt="Kolay gelsin" />
              ) : (
                <img src="logo-mini.png" height={50} alt="Kolay gelsin" />
              )}
            </span>
          </Link>
          <ul className="nav_list m-0 p-0">
            {menus.map((menu, index) => (
              <NavLinkMenu key={index} isOpen={menuState} {...menu} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
