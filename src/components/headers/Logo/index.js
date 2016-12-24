import React from 'react';
import styles from './index.css';
import { Link } from 'react-scroll';

const Logo = ( { scrollTo }) => (
  <div className={styles.logo}>
    <img src="/assets/img/logo/stocktveld_new_small.png"></img>
    <div>
      <Link
        to={scrollTo}
        spy={true}
        smooth={true}
        offset={50}
        duration={750}
      >
        {
          <i className={`${styles.icon} material-icons md-36`}>arrow_drop_down_circle</i>
          // http://jsfiddle.net/YYPKM/3/
          // http://stackoverflow.com/questions/22246796/smooth-scrolling-with-just-pure-css
          // https://www.sitepoint.com/smooth-scrolling-vanilla-javascript/
          // https://github.com/fisshy/react-scroll
          // https://github.com/alicelieutier/smoothScroll

        }
      </Link>
    </div>
  </div>
);

Logo.propTypes = {
  scrollTo: React.PropTypes.string
};

export default Logo;
