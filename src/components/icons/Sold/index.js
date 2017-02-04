import React from 'react';
import styles from './index.css';

const Sold = ({ percentageSold }) => (
  <div className={`${styles.cornerRibbon} ${styles.topLeft} ${styles.shadow}`}>
    {percentageSold}% verkocht
  </div>
);

Sold.propTypes = {
  percentageSold: React.PropTypes.number.isRequired
};

export default Sold;
