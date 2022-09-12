import { memo } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotificationMenuComponent = () => {
  const popOver = (
    <Popover id="notification-menu" body={true}>
      <Popover.Header as="h5">Notifications</Popover.Header>
      <Popover.Body>Lorem ipsum dolat sit amed</Popover.Body>
    </Popover>
  );
  return (
    <NavLink to="/" className="nav_link d-flex justify-content-between">
      <OverlayTrigger trigger="click" placement="top" overlay={popOver}>
        <span className="first position-relative">
          <i className="nav_icon fa-solid fa-bell is-notification"></i>
          <span className="nav_name">Notification</span>
        </span>
      </OverlayTrigger>
    </NavLink>
  );
};

const NotificationMenu = memo(NotificationMenuComponent);
export default NotificationMenu;
