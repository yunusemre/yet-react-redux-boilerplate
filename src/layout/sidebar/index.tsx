import './sidebar.scss';

import { SidebarFooter } from './sidebarFooter';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">Sidebar</div>
      <SidebarFooter />
    </div>
  );
};
