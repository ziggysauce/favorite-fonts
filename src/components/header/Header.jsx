import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-100 border">
        <h1 className="py-3">Header goes here!</h1>
      </div>
    );
  }
}

export default Header;
