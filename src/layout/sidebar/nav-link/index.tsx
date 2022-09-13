import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { NavLink } from 'react-router-dom';
import { openMenu } from '../../../store/features/appSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

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

  const icons = [
    'fa-home',
    'fa-search',
    'fa-envelope',
    'fa-heart',
    'fa-gear',
    'fa-star',
    'fa-wrench',
    'fa-user',
    'fa-droplet',
    'fa-folder',
    'fa-home',
    'fa-search',
    'fa-envelope',
    'fa-heart',
    'fa-gear',
    'fa-star',
    'fa-wrench',
    'fa-user',
    'fa-droplet',
    'fa-folder',
    'fa-home',
    'fa-search',
    'fa-envelope',
    'fa-heart',
    'fa-gear',
    'fa-star',
    'fa-wrench',
    'fa-user',
    'fa-droplet',
    'fa-folder',
    'fa-home',
    'fa-search',
    'fa-envelope',
    'fa-heart',
    'fa-gear',
    'fa-star',
    'fa-wrench',
    'fa-user',
    'fa-droplet',
    'fa-folder',
    'fa-home',
    'fa-search',
    'fa-envelope',
    'fa-heart',
    'fa-gear',
    'fa-star',
    'fa-wrench',
    'fa-user',
    'fa-droplet',
    'fa-folder',
  ];

  useEffect(() => {
    if (!menuState) setOpen(menuState);
  }, [menuState]);

  return (
    <li className="position-relative">
      {path !== '' && children.length === 0 ? (
        <NavLink
          title={title}
          to={path}
          className={(navData) =>
            'nav_link d-flex justify-content-between' + (navData.isActive ? ' selected' : '')
          }
        >
          <span className="first">
            <i className={`nav_icon fa-solid ${icons[Math.ceil(Math.random() * 11)]}`}></i>
            <span className="nav_name">{title}</span>
          </span>
        </NavLink>
      ) : (
        <a
          className="nav_link c-pointer d-block"
          onClick={() => {
            setOpen(!open);
            if (!menuState) dispatch(openMenu());
          }}
        >
          <span className="first">
            <i className={`nav_icon fa-solid ${icons[Math.ceil(Math.random() * 11)]}`}></i>
            <span className="nav_name">{title}</span>
          </span>
          <span className="last" onClick={() => setOpen(!open)}>
            {isOpen && children.length > 0 && (
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
          {children.map((sub: any, index: number) => (
            <NavLinkMenu key={index} {...sub} />
          ))}
        </ul>
      </Collapse>
    </li>
  );
};
