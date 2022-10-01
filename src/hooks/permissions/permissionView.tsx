import { usePermission } from './usePermission';

const CanView = ({ permission, children }: any) => {
  const policy = usePermission(permission);
  if (policy) return <>{children}</>;
  return null;
};

export default CanView;
