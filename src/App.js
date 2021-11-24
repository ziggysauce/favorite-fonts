/* eslint-disable react/no-unused-state */
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
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
    const response = await fetch('/api');
    console.log('THE RESPONSE: ', response);
    const body = await response.json();
    console.log('THE BODY: ', body);

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button type="button" onClick={this.doSomething}>
            CLICK ME
          </button>
        </header>
      </div>
    );
  }
}

export default App;
