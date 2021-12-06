/* eslint-disable react/no-unused-state */
import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  doSomething = async () => {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  };

  callBackendAPI = async () => {
    try {
      const response = await fetch('/api');
      console.log('THE RESPONSE: ', response);
      const body = await response.json();
      console.log('THE BODY: ', body);

      if (response.status !== 200) {
        throw Error(body.message);
      }

      return body;
    } catch (error) {
      console.log('AN ERROR OCCURRED: ', error);
      throw new Error();
    }
  };

  render() {
    return (
      <div className="w-100 h-100 border">
        <h1 className="py-3">Body! goes here!</h1>
        <button
          className="btn btn-outline-primary my-2"
          type="button"
          onClick={this.doSomething}
        >
          CLICK ME
        </button>
      </div>
    );
  }
}

export default Footer;
