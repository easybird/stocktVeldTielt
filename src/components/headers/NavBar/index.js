import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Svg from 'react-svg-inline';
import facebookSvg from '../../icons/iconmonstr-facebook-5.svg';
import styles from './index.css';

const NavBar = (props, { metadata: { pkg } }) => (
  <div>
    <div className={styles.navBar}>
      <i className={`${styles.icon} material-icons`}>view_headline</i>
      <span className={styles.menuIcon}></span>
      <div className={`${styles.navBarCollapse} ${styles.collapse}`}></div>
    </div>
    <div className={styles.navbar}>
      <nav className={ styles.nav }>
        <div className={ styles.navPart1 }>
          <Link
            className={ styles.link }
            to="/"
          >
            { "Home" }
          </Link>
          <Link
            className={ styles.link }
            to="/"
          >
            { "Locatie" }
          </Link>
          <Link
            className={ styles.link }
            to="/"
          >
            { "Aanbod" }
          </Link>
          <Link
            className={ styles.link }
            to="/"
          >
            { "Verhalen" }
          </Link>
          <Link
            className={ styles.link }
            to="/"
          >
            { "Contact" }
          </Link>
          <div className={ styles.navPart2 }>
            {
              pkg.facebook &&
              <a
                href={ pkg.facebook }
                className={ styles.link }
                target="_new"
              >
                <Svg svg={ facebookSvg } cleanup/>
              </a>
            }
          </div>
        </div>
      </nav>

    </div>
  </div>
);

NavBar.contextTypes = {
  metadata: PropTypes.object.isRequired
}


export default NavBar;
