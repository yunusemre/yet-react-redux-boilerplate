import { useAppSelector } from '@store/hooks';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';

const Layout = () => {
  const menuState = useAppSelector((state) => state.app.menuOpen);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className={`page-container${menuState ? ' open' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
