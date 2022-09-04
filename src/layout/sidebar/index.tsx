import './sidebar.scss';

import { Col, Row } from 'react-bootstrap';
import { SidebarFooter } from './sidebarFooter';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Row className="sidebar-container">
        <Col>Sidebar</Col>
      </Row>
      <SidebarFooter />
    </div>
  );
};
