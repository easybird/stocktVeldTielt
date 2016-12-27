import React from 'react';
import styles from './index.css';
import { Link } from 'react-scroll';

const Logo = ({ scrollTo }) => (
  <Link
    to={scrollTo}
    spy={true}
    smooth={true}
    offset={-10}
    duration={750}
    className={styles.logo}
    style={{ cursor: "pointer", width: "100%" }}
  >
    <img src="/assets/img/logo/stocktveld_new_small.png"></img>
    <div>

      <i
        className={`${styles.icon} material-icons md-36`}
      >
        arrow_drop_down_circle
      </i>
    </div>
  </Link>
);

Logo.propTypes = {
  scrollTo: React.PropTypes.string
};

export default Logo;
