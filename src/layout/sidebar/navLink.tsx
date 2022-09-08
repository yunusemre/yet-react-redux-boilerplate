import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

interface NavLinkMenuType {
  url: string;
  title: string;
  icon: string;
  count?: number;
  isOpen: boolean;
  subMenu?: any[];
}

export const NavLinkMenu = ({
  url,
  title,
  icon = 'fa-solid fa-clipboard',
  count,
  subMenu = [],
  isOpen,
}: NavLinkMenuType) => {
  const [open, setOpen] = useState<boolean>(false);
  const menuState = useAppSelector((state) => state.app.menuOpen);
  useEffect(() => {
    if (!menuState) setOpen(menuState);
  }, [menuState]);
  return (
    <li className="position-relative">
      {url !== '' && subMenu.length === 0 ? (
        <NavLink
          to={url}
          className={(navData) =>
            'nav_link d-flex justify-content-between' + (navData.isActive ? ' selected' : '')
          }
        >
          <span className="first">
            <i className={`nav_icon ${icon}`}></i>
            <span className="nav_name">{title}</span>
          </span>
        </NavLink>
      ) : (
        <a className="nav_link c-pointer d-block" onClick={() => setOpen(!open)}>
          <span className="first">
            <i className={`nav_icon ${icon}`}></i>
            <span className="nav_name">{title}</span>
          </span>
          <span className="last" onClick={() => setOpen(!open)}>
            <span className="count">{count}</span>
            {isOpen && subMenu.length > 0 && (
              <i
                className={`position-absolute caret_icon fa-sharp fa-solid ${
                  open ? 'fa-angle-up' : 'fa-angle-down'
                }`}
              ></i>
            )}
          </span>
        </a>
      )}

      <Collapse in={open}>
        <ul className="sub-menu">
          {subMenu.map((sub: any, index: number) => (
            <NavLinkMenu key={index} {...sub} />
          ))}
        </ul>
      </Collapse>
    </li>
  );
};
