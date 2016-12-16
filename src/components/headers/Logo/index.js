import React from 'react';
import styles from './index.css';
import { Link } from 'react-router';

const Logo = () => (
  <div className={styles.logo}>
    <img src="/assets/img/logo/stocktveld_new_small.png"></img>
    <div>
      <Link
        onClick={() => {
          console.log('test!!!!');
          return;
        }}
        to="/"
      >
        {
          <i className={`${styles.icon} material-icons md-36`}>arrow_drop_down_circle</i>
          // http://jsfiddle.net/YYPKM/3/
          // http://stackoverflow.com/questions/22246796/smooth-scrolling-with-just-pure-css
        }
      </Link>
    </div>
  </div>
);

export default Logo;
