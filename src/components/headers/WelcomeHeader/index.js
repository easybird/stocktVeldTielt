import React from 'react';
import Banner from '../Banner';
import Logo from '../Logo';
import styles from './index.css';

const WelcomeHeader = ({ scrollTo }) =>
  (
    <header className={styles.welcomeHeader}>
      <div className={styles.banner}>
        <Banner autoplayInteval={3000}
                links={['/assets/img/banner/kloostertuin.jpg',
                  '/assets/img/banner/binnenplein.jpg',
                  '/assets/img/banner/tuin-achterkant.jpg'
                ]}/>
        <div className={styles.heroTextBox}>
          <a className={`${styles.btn} ${styles.btnFull}`} href="/aanbod">Bekijk ons aanbod</a>
          <a className={`${styles.btn} ${styles.btnGhost}`} href="/verhalen">Benieuwd naar wie we zijn?</a>
        </div>
      </div>
      <div className={styles.logo}>
        <Logo scrollTo={scrollTo}/>
      </div>
    </header>
  );

WelcomeHeader.propTypes = {
  scrollTo: React.PropTypes.string
};

export default WelcomeHeader
