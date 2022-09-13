import './options-menu.scss';

import { memo } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomMenu, CustomToggle } from '../dropdown-menu';

const OptionsMenuComponent = () => {
  return (
    <div className="options-menu">
      <Dropdown drop="up">
        <Dropdown.Toggle as={CustomToggle} icon="fa-solid fa-gear">
          <span className="menu-dropdown-options">
            Options <i className="position-relative fa-solid fa-caret-up"></i>
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item as={Link} to="/profile">
            <i className="fa-sharp fa-solid fa-user"></i> Yunus Emre Tatar
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/profile">
            <i className="fa-sharp fa-solid fa-globe"></i> Language
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/auth/login">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const OptionsMenu = memo(OptionsMenuComponent);
export default OptionsMenu;
