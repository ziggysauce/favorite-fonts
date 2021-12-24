import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRedo,
  faSearch,
  faSun,
  faMoon,
  faGripHorizontal,
  faListUl,
} from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLargeViewport: false };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  /**
   * @description Handles window resize event for specific media breakpoint related BS classes
   */
  handleResize() {
    this.setState({ isLargeViewport : window.innerWidth > 992 });
  }

  render() {
    const {
      parentState: {
        searchFont,
        previewType,
        previewText,
        fontSize,
        darkMode,
        gridMode,
      },
      onSearchFont,
      onSelectPreviewTextType,
      onChangeTextPreview,
      onSelectFontSize,
      onToggleDarkMode,
      onToggleGridMode,
      onReset,
    } = this.props;
    const { isLargeViewport } = this.state;
    const textPreviewOptions = [
      'Custom',
      'Sentence',
      'Alphabet',
      'Paragraph',
      'Numerals',
    ];
    const fontSizes = [
      '8',
      '12',
      '14',
      '20',
      '24',
      '32',
      '40',
      '64',
      '96',
      '120',
      '184',
      '280',
    ];
    return (
      <div className="sticky-top px-4 py-2 border-bottom bg-body">
        <div className={classNames(
          {'d-flex flex-column flex-lg-row m-3 border': true},
          {'rounded-pill': isLargeViewport}
        )}>
          <div className={classNames(
            {'p-3 border-lg-only col-12 col-lg-3': true},
            {'border-end': isLargeViewport}
          )}>
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <FontAwesomeIcon
                className="fa-icon muted cursor-pointer"
                icon={faSearch}
              />
              <input
                value={searchFont}
                placeholder="Search fonts"
                className={classNames({'border-0 outline-0 mx-2': true}, {'w-100': isLargeViewport})}
                onChange={onSearchFont}
              />
            </div>
          </div>
          <div className={classNames(
            {'p-3 border-lg-only col-12 col-lg-5': true},
            {'border-end': isLargeViewport}
          )}>
            <div className="d-flex">
              <div className="d-flex justify-content-center align-items-center h-100 w-100">
                <select
                  value={previewType}
                  className="border-0 outline-0 cursor-pointer"
                  aria-label="Text preview select"
                  onChange={onSelectPreviewTextType}
                >
                  {textPreviewOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <input
                  onChange={onChangeTextPreview}
                  value={previewText}
                  placeholder="Type something"
                  className="border-0 outline-0 mx-2 w-100"
                />
              </div>
            </div>
          </div>
          <div className="row col-12 p-0 m-0">
            <div className={classNames(
              {'p-3 border-lg-only col-3 col-lg-1': true},
              {'border-end': isLargeViewport}
            )}>
              <div className="d-flex justify-content-center align-items-center h-100 w-100">
                <select
                  value={`${fontSize}`}
                  className="border-0 outline-0 cursor-pointer"
                  aria-label="Font size select"
                  onChange={onSelectFontSize}
                >
                  {fontSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}px
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={classNames(
              {'col-3 col-lg-1': true},
              {'border-end': isLargeViewport}
            )}>
              <button
                onClick={onToggleDarkMode}
                type="button"
                className="d-flex justify-content-center align-items-center h-100 w-100 bg-transparent border-0 outline-0"
              >
                <FontAwesomeIcon
                  className="fa-icon muted"
                  icon={darkMode ? faMoon : faSun}
                />
              </button>
            </div>
            <div className={classNames(
              {'col-3 col-lg-1': true},
              {'border-end': isLargeViewport}
            )}>
              <button
                onClick={onToggleGridMode}
                type="button"
                className="d-flex justify-content-center align-items-center h-100 w-100 bg-transparent border-0 outline-0"
              >
                <FontAwesomeIcon
                  className="fa-icon muted"
                  icon={gridMode ? faGripHorizontal : faListUl}
                />
              </button>
            </div>
            <div className="col-3 col-lg-1">
              <button
                onClick={onReset}
                type="button"
                className="d-flex justify-content-center align-items-center h-100 w-100 bg-transparent border-0 outline-0"
              >
                <FontAwesomeIcon className="fa-icon muted" icon={faRedo} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
