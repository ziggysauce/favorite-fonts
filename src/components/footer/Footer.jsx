import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-100 border-top">
        <p className="mb-0 py-4">
          Coded by
          <a
            href="https://github.com/ziggysauce"
            className="px-1"
            target="_blank"
            rel="noreferrer"
          >
            ziggysauce
          </a>
          | 2021 | Chingu Solo Project
        </p>
      </div>
    );
  }
}

export default Footer;
