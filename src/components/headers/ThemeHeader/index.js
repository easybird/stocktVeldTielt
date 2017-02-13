import React from 'react';
import styles from './index.css';
import Logo from '../Logo';

const ThemeHeader = ({ hero, height, customStyle, hasLogo, scrollTo }) => {
  return (
    <header
      className={styles.header}
      style={ hero || hasLogo ? { height } : { height: '0px' }}
    >
      <div
        className={styles.logo}
      >
        {hero &&
        <div
          className={styles.logo}
          style={Object.assign({
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${hero.src})`,
            height
          }, customStyle)}
        />}
        { hasLogo && <Logo scrollTo={scrollTo}/>}
      </div>
    </header>
  );
}


ThemeHeader.propTypes = {
  hero: React.PropTypes.object,
  height: React.PropTypes.string,
  customStyle: React.PropTypes.object,
  hasLogo: React.PropTypes.bool,
  scrollTo: React.PropTypes.string
}
export default ThemeHeader
