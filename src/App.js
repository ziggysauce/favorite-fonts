/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

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
      <div className="App">
        <Header />
        <Navbar />
        <button
          className="btn btn-primary my-2"
          type="button"
          onClick={this.doSomething}
        >
          CLICK ME
        </button>
        <Footer />
      </div>
    );
  }
}

export default App;
