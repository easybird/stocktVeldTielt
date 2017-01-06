import React from 'react';
import styles from './index.css';

const ThemeHeader = ({ hero, height }) => {
  return (
    <header
      className={styles.header}
      style={ { height }}
    >
      <div className={styles.logo}>
        <div
          className={styles.logo}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${hero.src})`,
            height
          }}
        >
        </div>
      </div>
    </header>
  );
}


ThemeHeader.propTypes = {
  hero: React.PropTypes.object.isRequired,
  height: React.PropTypes.string
}
export default ThemeHeader
