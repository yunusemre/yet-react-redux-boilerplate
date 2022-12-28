import './sidebar.scss';

import { menuToggle } from '@store/features/app-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import classNames from 'classnames';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { NavLinkMenu } from './nav-link';
import NotificationMenu from './notification-menu';
import OptionsMenu from './options-menu';

const SidebarMenu = () => {
  const menuState = useAppSelector((state) => state.app.menuOpen);
  const menus = useAppSelector((state) => state.app.menus);
  const dispatch = useAppDispatch();
  const isOpenMenu = classNames({ ' open': menuState });

  return (
    <div className={`sidebar${isOpenMenu}`}>
      <div
        className={`sidebar-toggle c-pointer${isOpenMenu}`}
        onClick={() => dispatch(menuToggle())}
      >
        {menuState ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </div>
      <>
        <Link to="/" className="logo mb-2 pt-2 d-block">
          <span className="c-pointer">
            {menuState ? (
              <img src="/logo.png" height="50" alt="React Boilerplate" />
            ) : (
              <img src="/logo.png" height="50" alt="React Boilerplate" />
            )}
          </span>
        </Link>
        <nav className="nav scroll-height-scroll">
          <ul className="order-list">
            {menus.map((menu: any, index: number) => (
              <NavLinkMenu key={index} isOpen={menuState} {...menu} />
            ))}
          </ul>
        </nav>
        <nav className="nav nav-footer">
          <ul className="nav-list w-100 m-0">
            <li className="notifications-menu">
              <NotificationMenu />
            </li>
            <li className="options-menu">
              <OptionsMenu />
            </li>
          </ul>
        </nav>
      </>
    </div>
  );
};

const Sidebar = memo(SidebarMenu);

export { Sidebar };
