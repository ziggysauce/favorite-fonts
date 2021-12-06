/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import Navbar from './components/navigation/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      darkMode: false,
    };
    this.onToggleDarkMode = this.onToggleDarkMode.bind(this);
  }

  /**
   * @description Toggles the dark theme mode on/off
   */
  onToggleDarkMode() {
    const { darkMode } = this.state;
    this.setState({
      darkMode: !darkMode,
    });
  }

  render() {
    const { darkMode } = this.state;
    return (
      <div
        className={classNames(
          { 'App min-vh-100': true },
          { 'dark-mode': darkMode }
        )}
      >
        <Header parentState={this.state} />
        <Navbar
          parentState={this.state}
          onToggleDarkMode={this.onToggleDarkMode}
        />
        <Body parentState={this.state} />
        <Footer parentState={this.state} />
      </div>
    );
  }
}

export default App;
