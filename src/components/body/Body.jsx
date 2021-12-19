/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      filteredData: [],
      testText: 'Old text... Boo',
    };
  }

  componentDidMount() {
    this.initiateAPIFetch();
  }

  /**
   * @description Begins the backend API call  logic
   * If applicable, retrieves the google fonts API data
   * and adds stylesheets for each font family
   */
  initiateAPIFetch = async () => {
    const { data } = await this.callBackendAPI();
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
    this.setState({ data, loading: false });
  };

  /**
   * @description Fetches backend API data
   */
  callBackendAPI = async () => {
    let body = { data: null };
    try {
      const response = await fetch('/api', {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseTwo = await fetch('/api-test', {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (responseTwo) {
        const newBody = await responseTwo.json();
        const testText = newBody.data;
        this.setState({ testText });
      }
      if (response) {
        body = await response.json();
      }
      if (response.status !== 200) {
        throw Error(body.message);
      }
    } catch (error) {
      // Silently fail
      console.log('AN ERROR OCCURRED: ', error);
    }
    return body;
  };

  render() {
    const {
      parentState: { searchFont, previewText, fontSize, gridMode },
    } = this.props;
    const { loading, data, testText } = this.state;

    // Filter font family data based on search results
    let filteredData = data;
    if (data && data.length && searchFont.length) {
      filteredData = data.filter((f) =>
        f.family.toLowerCase().includes(searchFont.toLowerCase())
      );
    }

    return (
      <div className="w-100 h-100">
        {loading && (
          <div className="p-3 m-3">
            <h2>Loading Font Families...</h2>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {testText && testText.length && (
          <div>
            <h2>This is from the server: {testText}</h2>
          </div>
        )}
        {!loading && (!data || data.length === 0) && (
          <div className="p-3 m-3">
            <h2>
              Sorry, something went wrong. Unable to load any font families!
            </h2>
          </div>
        )}
        {data && data.length && (
          <div className="pb-2 pt-4 px-3 w-100 text-start">
            <small>
              Displaying {filteredData.length} of {data.length} families.
            </small>
          </div>
        )}
        {filteredData && filteredData.length ? (
          <div className="d-flex flex-wrap">
            {filteredData.map((f) => {
              const fontStyle = {
                fontFamily: `${f.family}, sans-serif`,
                fontSize: `${fontSize}px`,
              };
              return (
                <LazyLoad
                  key={f.family.replace(/ /g, '-')}
                  className={classNames(
                    { 'p-3 col-12': true },
                    { 'col-md-6 col-xl-4': gridMode }
                  )}
                >
                  <div className="card h-100 p-3 d-flex flex-column align-items-start">
                    <h5 className="mb-0 pb-3 muted">{f.family}</h5>
                    <p className="mb-0 text-start text-break" style={fontStyle}>
                      {previewText || 'Type something...'}
                    </p>
                  </div>
                </LazyLoad>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Footer;
