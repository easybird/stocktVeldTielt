import React from 'react';
import Helmet from 'react-helmet';

class FacebookButton extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (window && window.followButton());
  }

  render() {
    return (
      <div>
        <div id="fb-root"></div>
        <Helmet
          script={ [
            { src: "/assets/js/followButton.js" },
          ] }
        />
        <div className="fb-follow" data-href="https://www.facebook.com/stocktveld" data-layout="standard"
             data-size="large" data-show-faces="true"></div>
      </div>
    )
  }
}

FacebookButton.propTypes = {};
export default FacebookButton;
