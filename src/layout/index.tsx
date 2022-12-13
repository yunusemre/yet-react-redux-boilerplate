import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';

const Layout = () => {
  const { menuOpen } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  return (
    <div className="wrapper">
      <Sidebar />
      <div className={`page-container${menuOpen ? ' open' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
