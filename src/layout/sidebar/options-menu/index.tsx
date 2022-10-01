import './options-menu.scss';

import Path from '@routers/paths';
import { memo } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CustomMenu, CustomToggle } from '../dropdown-menu';

const OptionsMenuComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="options-menu">
      <Dropdown drop="up" align="end">
        <Dropdown.Toggle as={CustomToggle} icon="fa-solid fa-gear">
          <span className="menu-dropdown-options">
            {t('menu.options')} <i className="position-relative fa-solid fa-caret-up"></i>
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu} renderOnMount>
          <Dropdown.Item as={Link} to={Path.profile}>
            <i className="fa-sharp fa-solid fa-user me-1"></i> Yunus Emre Tatar
          </Dropdown.Item>
          <Dropdown.Item as={Link} to={Path.login}>
            <i className="fa-solid fa-arrow-right-from-bracket me-1"></i> {t('auth.logout')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const OptionsMenu = memo(OptionsMenuComponent);
export default OptionsMenu;
