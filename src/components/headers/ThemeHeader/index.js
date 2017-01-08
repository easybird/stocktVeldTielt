import React from 'react';
import styles from './index.css';

const ThemeHeader = ({ hero, height, customStyle }) => {
  return (
    <header
      className={styles.header}
      style={ { height }}
    >
      <div
        className={styles.logo}
      >
        <div
          className={styles.logo}
          style={Object.assign({
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${hero.src})`,
            height
          }, customStyle)}
        >
        </div>
      </div>
    </header>
  );
}


ThemeHeader.propTypes = {
  hero: React.PropTypes.object.isRequired,
  height: React.PropTypes.string,
  customStyle: React.PropTypes.object
}
export default ThemeHeader
