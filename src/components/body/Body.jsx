/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    this.initiateAPIFetch();
  }

  initiateAPIFetch = async () => {
    const { data } = await this.callBackendAPI();
    this.setState({ data });
    console.log('STATE: ', { data });
  };

  callBackendAPI = async () => {
    let body = { data: null };
    try {
      const response = await fetch('/api/fonts');
      body = await response.json();

      if (response.status !== 200) {
        console.alert('Oh no. Bad status returned!');
        throw Error(body.message);
      }
    } catch (error) {
      console.log('AN ERROR OCCURRED: ', error);
      console.alert("Oops! It looks like the server isn't setup... awko taco");
    }
    // TODO: Remove when done testing
    body.data = body.data.slice(0, 100);
    return body;
  };

  render() {
    const {
      parentState: { previewText, fontSize, gridMode },
    } = this.props;
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
      <div className="w-100 h-100">
        {data && data.length && (
          <div className="pb-2 pt-4 px-3 w-100 text-start">
            <small>Displaying {data.length} fonts.</small>
          </div>
        )}
        <div className="d-flex flex-wrap">
          {data &&
            data.length &&
            data.map((f) => {
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
                    <h5 className="mb-0 pb-3">{f.family}</h5>
                    <p className="mb-0 text-start text-break" style={fontStyle}>
                      {previewText}
                    </p>
                  </div>
                </LazyLoad>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Footer;
