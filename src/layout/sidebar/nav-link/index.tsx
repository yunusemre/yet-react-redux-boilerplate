import './nav-link.scss';

import { openMenu } from '@store/features/appSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect, useState } from 'react';
import { Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface NavLinkMenuType {
  path: string;
  data: any;
  children: any[];
  isOpen: boolean;
}

interface Data {
  menu: Menu;
}
interface Menu {
  title: string;
  icon: string;
  selected: boolean;
  expanded: boolean;
  order: number;
}

export const NavLinkMenu = ({
  path,
  data: {
    menu: { title, icon },
  },
  children,
  isOpen,
}: NavLinkMenuType) => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.app.menuOpen);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!menuState) setOpen(menuState);
  }, [menuState]);

  return (
    <li className={`position-relative ${open ? 'parent-selected' : ''}`}>
      {path !== '' && children.length === 0 ? (
        <NavLink
          title={title}
          data-name={title}
          data-path={path}
          to={path}
          className={(navData) =>
            'nav-link d-flex justify-content-between' + (navData.isActive ? ' selected' : '')
          }
        >
          {!menuState ? (
            <OverlayTrigger placement="right" overlay={<Tooltip>{title}</Tooltip>}>
              <span className="first">
                <i className="nav-icons fa-solid fa-envelope"></i>
                <span className="nav-name">{title}</span>
              </span>
            </OverlayTrigger>
          ) : (
            <span className="first">
              <i className="nav-icons fa-solid fa-envelope"></i>
              <span className="nav-name">{title}</span>
            </span>
          )}
        </NavLink>
      ) : (
        <a
          className="nav-link c-pointer d-block"
          onClick={() => {
            setOpen(!open);
            if (!menuState) dispatch(openMenu());
          }}
        >
          {!menuState ? (
            <OverlayTrigger placement="right" overlay={<Tooltip>{title}</Tooltip>}>
              <span className="first">
                <i className="nav-icons fa-solid fa-envelope"></i>
                <span className="nav-name">{title}</span>
              </span>
            </OverlayTrigger>
          ) : (
            <span className="first">
              <i className="nav-icons fa-solid fa-envelope"></i>
              <span className="nav-name">{title}</span>
            </span>
          )}

          <span className="last" onClick={() => setOpen(!open)}>
            {isOpen && children.length > 0 && (
              <i
                className={`position-absolute caret-icon fa-sharp fa-solid ${
                  open ? 'fa-angle-up' : 'fa-angle-down'
                }`}
              ></i>
            )}
          </span>
        </a>
      )}

      <Collapse in={open}>
        <ul className="sub-menu p-0">
          {children.map((sub: any, index: number) => (
            <NavLinkMenu key={index} {...sub} />
          ))}
        </ul>
      </Collapse>
    </li>
  );
};
