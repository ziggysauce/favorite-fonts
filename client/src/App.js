/* eslint-disable react/no-unused-state */

import React from 'react';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/navigation/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';

/**
 * @description Scrolls to the top of the window
 */
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showScrollButton: false,
      searchFont: '',
      previewType: 'Custom',
      previewText: 'Almost before we knew it, we had left the ground.',
      fontSize: 40,
      darkMode: false,
      gridMode: true,
    };
    this.scrollToTop = scrollToTop;
    this.onSearchFont = this.onSearchFont.bind(this);
    this.onSelectPreviewTextType = this.onSelectPreviewTextType.bind(this);
    this.onChangeTextPreview = this.onChangeTextPreview.bind(this);
    this.onSelectFontSize = this.onSelectFontSize.bind(this);
    this.onToggleDarkMode = this.onToggleDarkMode.bind(this);
    this.onToggleGridMode = this.onToggleGridMode.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        this.setState({ showScrollButton: true });
      } else {
        this.setState({ showScrollButton: false });
      }
    });
  }

  /**
   * @description Changes the font search term
   * @param {Event} e
   */
  onSearchFont(e) {
    const searchFont = e.target.value;
    this.setState({ searchFont });
  }

  /**
   * @description Changes the preview text with canned text based on preview option
   * @param {Event} e
   */
  onSelectPreviewTextType(e) {
    const previewType = e.target.value;
    let { previewText, fontSize } = this.state;
    if (previewType === 'Sentence') {
      previewText = 'Almost before we knew it, we had left the ground.';
      fontSize = 40;
    } else if (previewType === 'Alphabet') {
      previewText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      fontSize = 24;
    } else if (previewType === 'Paragraph') {
      previewText =
        'A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.';
      fontSize = 18;
    } else if (previewType === 'Numerals') {
      previewText = '1234567890';
      fontSize = 24;
    }
    this.setState({ previewType, previewText, fontSize });
  }

  /**
   * @description Changes the preview text
   * @param {Event} e
   */
  onChangeTextPreview(e) {
    const previewText = e.target.value;
    this.setState({ previewType: 'Custom', previewText });
  }

  /**
   * @description Changes selected the font size
   * @param {Number} size
   */
  onSelectFontSize(e) {
    const fontSize = Number(e.target.value);
    this.setState({ fontSize });
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

  /**
   * @description Toggles between grid or list mode
   */
  onToggleGridMode() {
    const { gridMode } = this.state;
    this.setState({
      gridMode: !gridMode,
    });
  }

  /**
   * @description Reset filters to initial default state
   */
  onReset() {
    this.setState({
      searchFont: '',
      previewType: 'Custom',
      previewText: 'Almost before we knew it, we had left the ground.',
      fontSize: 40,
    });
  }

  render() {
    const { showScrollButton, darkMode } = this.state;
    return (
      <div
        className={classNames(
          { 'App min-vh-100': true },
          { 'dark-mode': darkMode }
        )}
      >
        <Header />
        <Navbar
          // Passing in the whole state like this probably isn't a great idea but ¯\_(ツ)_/¯
          parentState={this.state}
          onSearchFont={this.onSearchFont}
          onSelectPreviewTextType={this.onSelectPreviewTextType}
          onChangeTextPreview={this.onChangeTextPreview}
          onSelectFontSize={this.onSelectFontSize}
          onToggleDarkMode={this.onToggleDarkMode}
          onToggleGridMode={this.onToggleGridMode}
          onReset={this.onReset}
        />
        <Body parentState={this.state} />
        <Footer />
        {showScrollButton && (
          <button
            className="scroll-up-button"
            type="button"
            onClick={this.scrollToTop}
          >
            <FontAwesomeIcon
              className="fa-icon cursor-pointer muted"
              icon={faArrowUp}
              size="lg"
            />
          </button>
        )}
      </div>
    );
  }
}

export default App;
