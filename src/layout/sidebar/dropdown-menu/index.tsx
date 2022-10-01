import { Children, forwardRef, useState } from 'react';

const CustomToggle = forwardRef(({ children, onClick, icon }: any, ref: any) => (
  <span
    className="nav-link d-flex justify-content-between c-pointer"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <span className="first">
      <i className={`nav-icons ${icon}`}></i>
      <span className="nav-name">{children}</span>
    </span>
  </span>
));

const CustomMenu = forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }: any, ref: any) => {
    const [value] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={`position-fixed ${className}`}
        aria-labelledby={labeledBy}
      >
        {Children.toArray(children).filter(
          (child: any) => !value || child.props.children.toLowerCase().startsWith(value)
        )}
      </div>
    );
  }
);

const CustomNotifications = forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }: any, ref: any) => {
    return (
      <div ref={ref} style={style} className={`notification-dropdown ${className}`}>
        {children}
      </div>
    );
  }
);

export { CustomMenu, CustomToggle, CustomNotifications };
