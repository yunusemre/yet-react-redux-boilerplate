import './notification-menu.scss';

import Path from '@routers/paths';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const NotificationMenuComponent = () => {
  return (
    <NavLink
      to={Path.notifications}
      className={(navData) =>
        'nav-link d-flex justify-content-between mb-0' + (navData.isActive ? ' selected' : '')
      }
    >
      <span className="first position-relative">
        <i className="nav-icons fa-solid fa-bell is-notification"></i>
        <span className="nav-name">Notification</span>
      </span>
    </NavLink>
  );
};

const NotificationMenu = memo(NotificationMenuComponent);
export default NotificationMenu;
