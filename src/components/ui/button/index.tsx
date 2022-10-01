import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export interface UiButtonType {
  type?: 'submit' | 'button' | 'reset' | any;
  className?: 'w-100' | string;
  icon?: 'fa-solid fa-save' | string;
  text?: 'Button' | string;
  size?: 'sm' | 'lg';
  variant?: string;
  loading?: boolean;
  disabled?: boolean;
  props?: any;
  onClick?: () => void;
}

const UiButton = ({
  type,
  className,
  loading = false,
  icon,
  text,
  variant = 'primary',
  size,
  disabled = false,
  ...props
}: UiButtonType) => {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <Button
      variant={variant}
      type={type}
      className={className}
      size={size}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <i className="fa-solid fa-spinner fa-spin-pulse"></i>
      ) : (
        <>
          {icon && <i className={icon}></i>}
          {text && <span className="ms-1">{text}</span>}
        </>
      )}
    </Button>
  );
};

export { UiButton };
