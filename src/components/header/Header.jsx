import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-100 border-bottom p-4 d-flex justify-content-between align-items-center">
        <a
          href="https://fonts.google.com"
          target="_blank"
          rel="noreferrer"
          className="m-0 px-1"
        >
          Google Fonts
        </a>
        <div className="d-flex">
          <a
            href="https://fonts.google.com"
            target="_blank"
            rel="noreferrer"
            className="m-0 px-1"
          >
            Catalog
          </a>
          <a
            href="https://fonts.google.com/featured"
            target="_blank"
            rel="noreferrer"
            className="m-0 px-1"
          >
            Featured
          </a>
          <p className="m-0 px-1">Articles</p>
          <a
            href="https://fonts.google.com/about"
            target="_blank"
            rel="noreferrer"
            className="m-0 px-1"
          >
            About
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
