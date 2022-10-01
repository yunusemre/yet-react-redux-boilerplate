import { useAppSelector } from '@store/hooks';

const usePermission = (key: string) => {
  const permissions: any = useAppSelector((state) => state.app.permissions);
  return permissions[key] ?? false;
};

export { usePermission };
