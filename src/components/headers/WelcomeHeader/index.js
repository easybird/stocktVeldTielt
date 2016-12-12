import React from 'react';
import Banner from '../Banner';
import Logo from '../Logo';
import styles from './index.css';

const WelcomeHeader = () => (
  <header>
    <div className={styles.banner}>
      <Banner autoplayInteval={3000}
              links={['/assets/img/banner/kloostertuin.jpg',
                '/assets/img/banner/binnenplein.jpg',
                '/assets/img/banner/tuin-achterkant.jpg'
              ]}/>
      <div className={styles.heroTextBox}>
        <h1></h1>
        <a className={`${styles.btn} ${styles.btnFull}`} href="#">Bekijk ons aanbod</a>
        <a className={`${styles.btn} ${styles.btnGhost}`} href="#">Benieuwd naar wie we zijn?</a>
      </div>
    </div>
    <div className={styles.logo}>
      <Logo/>
    </div>
  </header>
);

export default WelcomeHeader
