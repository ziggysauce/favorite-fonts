import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-100 border p-4 d-flex justify-content-between align-items-center">
        <p className="mb-0">Google Fonts</p>
        <div className="d-flex">
          <p className="m-0 px-1">Catalog</p>
          <p className="m-0 px-1">Featured</p>
          <p className="m-0 px-1">Articles</p>
          <p className="m-0 px-1">About</p>
        </div>
      </div>
    );
  }
}

export default Header;
