import { forwardRef } from 'react';
import { usePermission } from './use-permission';

const withPermission = (Component: any, policyKey: string) => {
  const Forwarded = forwardRef((props, ref) => {
    const isGranted = usePermission(policyKey);
    return isGranted ? <Component ref={ref} {...props} /> : null;
  });

  return Forwarded;
};

export { withPermission };
