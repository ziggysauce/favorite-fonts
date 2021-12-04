import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="px-4">
        <div className="d-flex justify-content-around align-items-center p-2 m-3 border rounded-pill">
          <p className="mb-0">Search</p>
          <p className="mb-0">Type</p>
          <p className="mb-0">Size</p>
          <p className="mb-0">Theme Mode</p>
          <p className="mb-0">More</p>
          <FontAwesomeIcon icon={faRedo} />
        </div>
      </div>
    );
  }
}

export default Navbar;
