import React from 'react';
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
    this.state = {};
  }

  render() {
    const {
      parentState: { previewType, previewText, fontSize, darkMode, gridMode },
      onSelectPreviewTextType,
      onChangeTextPreview,
      onSelectFontSize,
      onToggleDarkMode,
      onToggleGridMode,
      onReset,
    } = this.props;
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
        <div className="d-flex m-3 border rounded-pill">
          <div className="p-3 border-end col-3">
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <FontAwesomeIcon className="fa-icon" icon={faSearch} />
              <input
                placeholder="Search fonts"
                className="border-0 outline-0 mx-2 w-100"
              />
            </div>
          </div>
          <div className="p-3 border-end col-5">
            <div className="d-flex">
              <div className="d-flex justify-content-center align-items-center h-100 w-100">
                <select
                  value={previewType}
                  className="border-0 outline-0"
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
          <div className="p-3 border-end col-1">
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <select
                value={`${fontSize}`}
                className="border-0 outline-0"
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
          <div className="border-end col-1">
            <button
              onClick={onToggleDarkMode}
              type="button"
              className="d-flex justify-content-center align-items-center h-100 w-100 bg-transparent border-0 outline-0"
            >
              <FontAwesomeIcon
                className="fa-icon"
                icon={darkMode ? faMoon : faSun}
              />
            </button>
          </div>
          <div className="border-end col-1">
            <button
              onClick={onToggleGridMode}
              type="button"
              className="d-flex justify-content-center align-items-center h-100 w-100 bg-transparent border-0 outline-0"
            >
              <FontAwesomeIcon
                className="fa-icon"
                icon={gridMode ? faGripHorizontal : faListUl}
              />
            </button>
          </div>
          <div className="col-1">
            <button
              onClick={onReset}
              type="button"
              className="d-flex justify-content-center align-items-center h-100 w-100 bg-transparent border-0 outline-0"
            >
              <FontAwesomeIcon className="fa-icon" icon={faRedo} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
