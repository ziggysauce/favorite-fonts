import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRedo,
  faSearch,
  faSun,
  faMoon,
  faListUl,
} from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      parentState: { darkMode },
      onToggleDarkMode,
    } = this.props;
    return (
      <div className="px-4">
        <div className="d-flex align-items-center m-3 border rounded-pill">
          <div className="p-3 border-end col-3 d-flex align-items-center">
            <FontAwesomeIcon icon={faSearch} />
            <input
              placeholder="Search fonts"
              className="border-0 outline-0 mx-2 w-100"
            />
          </div>
          <div className="p-3 border-end col-4">
            <input
              placeholder="Type something"
              className="border-0 outline-0 mx-2 w-100"
            />
          </div>
          <div className="p-3 border-end col-2">
            <select
              className="border-0 outline-0"
              aria-label="Default select example"
            >
              <option defaultValue>Size</option>
              <option value="1">12px</option>
              <option value="2">16px</option>
              <option value="3">20px</option>
              <option value="3">24px</option>
              <option value="3">28px</option>
              <option value="3">32px</option>
              <option value="3">36px</option>
              <option value="3">40px</option>
            </select>
          </div>
          <div className="p-3 border-end col-1">
            <FontAwesomeIcon
              icon={darkMode ? faMoon : faSun}
              onClick={onToggleDarkMode}
            />
          </div>
          <div className="p-3 border-end col-1">
            <FontAwesomeIcon icon={faListUl} />
          </div>
          <div className="p-3 col-1">
            <FontAwesomeIcon icon={faRedo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
