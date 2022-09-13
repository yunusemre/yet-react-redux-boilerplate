import './notification-menu.scss';

import { memo } from 'react';
import { Card, OverlayTrigger, Popover } from 'react-bootstrap';

const NotificationMenuComponent = () => {
  const popOver = (
    <Popover id="notification-menu">
      <Card>
        <Card.Body className="p-0">
          <Popover.Header>Notifications</Popover.Header>
          <Popover.Body>Lorem ipsum dolat sit amed</Popover.Body>
        </Card.Body>
      </Card>
    </Popover>
  );
  return (
    <span className="c-pointer nav_link d-flex justify-content-between">
      <OverlayTrigger containerPadding={20} trigger="click" placement="top" overlay={popOver}>
        <span className="first position-relative">
          <i className="nav_icon fa-solid fa-bell is-notification"></i>
          <span className="nav_name">Notification</span>
        </span>
      </OverlayTrigger>
    </span>
  );
};

const NotificationMenu = memo(NotificationMenuComponent);
export default NotificationMenu;
