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
    let body = { data: null };
    try {
      const response = await fetch('/api/fonts');
      console.log('THE RESPONSE: ', response);
      body = await response.json();
      console.log('THE BODY: ', body);

      if (response.status !== 200) {
        console.error('Oh no. Bad status returned!');
        throw Error(body.message);
      }
    } catch (error) {
      console.log('AN ERROR OCCURRED: ', error);
      console.error("Oops! It looks like the server isn't setup... awko taco");
    }
    return body;
  };

  render() {
    const { data } = this.state;
    if (data && data.length) {
      data.forEach((font) => {
        const apiUrl = [];
        apiUrl.push('https://fonts.googleapis.com/css?family=');
        apiUrl.push(font.family.replace(/ /g, '+'));
        const url = apiUrl.join('');
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = url;
        document.head.appendChild(fontLink);
      });
    }
    return (
      <div className="w-100 h-100 border">
        <h1 className="py-3">Body! goes here!</h1>
        <button
          className="btn btn-outline-primary my-2"
          type="button"
          onClick={this.doSomething}
        >
          Fetch Google Font Data
        </button>
        {data &&
          data.length &&
          data.map((f) => {
            const divStyle = {
              color: 'blue',
              fontFamily: `${f.family}, sans-serif`,
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
