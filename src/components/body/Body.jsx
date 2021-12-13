/* eslint-disable react/no-unused-state */
import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  doSomething = async () => {
    const { data } = await this.callBackendAPI();
    // this.callBackendAPI()
    //   .then((res) => this.setState({ data: res.express }))
    //   .catch((err) => console.log(err));
    this.setState({ data });
    console.log('STATE: ', { data });
  };

  callBackendAPI = async () => {
    try {
      const response = await fetch('/api/fonts');
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
    const { data } = this.state;
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
        {data &&
          data.length &&
          data.map((f) => {
            const divStyle = {
              color: 'blue',
              fontFamily: `url(${f.files[100]})`,
            };
            return (
              <div key={f.family} style={divStyle}>
                This is some test font
              </div>
            );
          })}
      </div>
    );
  }
}

export default Footer;
