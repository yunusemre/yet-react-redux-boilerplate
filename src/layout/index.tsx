import { Sidebar } from './sidebar';

const Layout = ({ children }: any): any => {
  return (
    <div className="wrapper d-flex">
      <Sidebar />
      <div className="page-container">{children}</div>
    </div>
  );
};
export default Layout;
