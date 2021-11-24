/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navigation/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  render() {
    return (
      <div className="App min-vh-100">
        <Header />
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
