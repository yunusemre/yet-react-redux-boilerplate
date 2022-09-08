import { useAppSelector } from '../store/hooks';
import { Sidebar } from './sidebar';

const Layout = ({ children }: any): any => {
  const menuState = useAppSelector((state) => state.app.menuOpen);
  return (
    <div className="wrapper d-flex">
      <Sidebar />
      <div className={`page-container${menuState ? ' open' : ''}`}>{children}</div>
    </div>
  );
};
export default Layout;
