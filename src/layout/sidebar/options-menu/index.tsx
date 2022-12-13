import './options-menu.scss';

import Path from '@routers/paths';
import { logout } from '@store/features/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { memo } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { CustomMenu, CustomToggle } from '../dropdown-menu';

const OptionsMenuComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.app);
  const logoutService = () => {
    dispatch(logout());
    navigate(Path.login);
  };
  return (
    <div className="options-menu">
      <Dropdown drop="up" align="end" className="">
        <Dropdown.Toggle as={CustomToggle} icon="fa-solid fa-gear" className="nav-links">
          <span className="menu-dropdown-options nav-links ms-0">
            {t('MENU.OPTIONS')} <i className="position-relative fa-solid fa-caret-up"></i>
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu} renderOnMount>
          <Dropdown.Item as={Link} to={Path.profile}>
            <i className="fa-sharp fa-solid fa-user me-1"></i> {name}
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => logoutService()}>
            <i className="fa-solid fa-arrow-right-from-bracket me-1"></i> {t('AUTH.LOGOUT')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const OptionsMenu = memo(OptionsMenuComponent);
export default OptionsMenu;
