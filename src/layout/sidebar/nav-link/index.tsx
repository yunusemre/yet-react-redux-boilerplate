import './nav-link.scss';

import { menuUpdate, openMenu } from '@store/features/app-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { memo, useEffect, useState } from 'react';
import { Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

interface NavLinkMenuType {
  path: string;
  data: any;
  children: any[];
  isOpen: boolean;
}

const NavLinkMenuComponent = ({
  path,
  data: {
    menu: { title, icon = 'fa-solid fa-file', expanded }, // icon
  },
  children,
  isOpen,
}: NavLinkMenuType) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.app.menuOpen);
  const [open, setOpen] = useState<boolean>(expanded);

  useEffect(() => {
    if (!menuState) setOpen(menuState);
    setOpen(menuState ? expanded : false);
  }, [menuState]);

  return (
    <li data-sidebar={title} className={`position-relative${open ? ' parent-selected' : ''}`}>
      {path !== '' && children.length === 0 ? (
        <NavLink
          title={t(title)}
          data-path={path}
          to={path}
          className={(navData) =>
            'nav-links d-flex justify-content-between' + (navData.isActive ? ' selected' : '')
          }
        >
          {!menuState ? (
            <OverlayTrigger placement="right" overlay={<Tooltip>{t(title)}</Tooltip>}>
              <span className="first">
                <i className={`nav-icons text-center ${icon}`}></i>
                <span className="nav-name">{t(title)}</span>
              </span>
            </OverlayTrigger>
          ) : (
            <span className="first">
              <i className={`nav-icons text-center ${icon}`}></i>
              <span className="nav-name">{t(title)}</span>
            </span>
          )}
        </NavLink>
      ) : (
        <a
          className="nav-links c-pointer d-block"
          onClick={() => {
            setOpen(!open);
            dispatch(menuUpdate({ path, expanded: !open }));
            if (!menuState) dispatch(openMenu());
          }}
        >
          {!menuState ? (
            <OverlayTrigger placement="right" overlay={<Tooltip>{t(title)}</Tooltip>}>
              <span className="first">
                <i className={`nav-icons text-center ${icon}`}></i>
                <span className="nav-name">{t(title)}</span>
              </span>
            </OverlayTrigger>
          ) : (
            <span className="first">
              <i className={`nav-icons text-center ${icon}`}></i>
              <span className="nav-name">{t(title)}</span>
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
            <NavLinkMenuComponent key={index} {...sub} path={`${path}/${sub.path}`} />
          ))}
        </ul>
      </Collapse>
    </li>
  );
};

const NavLinkMenu = memo(NavLinkMenuComponent);
export { NavLinkMenu };
