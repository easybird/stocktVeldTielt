import React from 'react';
import Banner from '../Banner';
import Logo from '../Logo';
import styles from './index.css';
import Button from '../../Button';

const WelcomeHeader = ({scrollTo}) => (
  <header className={styles.welcomeHeader}>
    <div className={styles.banner}>
      <Banner
        autoplayInteval={3000}
        links={[
          '/assets/img/aanbod/render_small_banner.jpg',
          '/assets/img/banner/kloostertuin.jpg',
          '/assets/img/banner/binnenplein.jpg',
          '/assets/img/banner/tuin-achterkant.jpg',
        ]}
      />
      <div className={styles.heroTextBox}>
        <Button
          linkText="Bekijk ons aanbod"
          href="/aanbod"
          type={Button.TYPE.FULL}
        />
        <Button
          linkText="Benieuwd naar wie we zijn?"
          href="/wie-zijn-we"
          type={Button.TYPE.GHOST}
        />
        <Button
          linkText="Kom naar onze infosessies"
          href="/contact#infosessies"
          type={Button.TYPE.FULL}
        />
      </div>
    </div>
    <div className={styles.logo}>
      <Logo scrollTo={scrollTo} />
    </div>
  </header>
);

WelcomeHeader.propTypes = {
  scrollTo: React.PropTypes.string,
};

export default WelcomeHeader;
