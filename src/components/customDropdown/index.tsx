import { Children, forwardRef, useState } from 'react';

const CustomToggle = forwardRef(({ children, onClick, icon }: any, ref: any) => (
  <div
    className="nav_link d-flex justify-content-between c-pointer"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <span className="first">
      <i className={`nav_icon ${icon}`}></i>
      <span className="nav_name">{children}</span>
    </span>
  </div>
));

const CustomMenu = forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }: any, ref: any) => {
    const [value] = useState('');

    return (
      <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
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
