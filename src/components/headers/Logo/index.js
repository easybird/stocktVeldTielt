import React from 'react';
import styles from './index.css';
import Pointer from '../../Pointer';

const Logo = ({ scrollTo }) => {
  const logo = <img src="/assets/img/logo/stocktveld_new_small.png"></img>;
  return scrollTo ?
      <Pointer
        className={styles.logo}
        scrollTo={scrollTo}
        offset={-10}
      >
        {logo}
      </Pointer> :
    <div className={styles.logo}>
      {logo}
    </div>
};

Logo.propTypes = {
  scrollTo: React.PropTypes.string
};

export default Logo;
