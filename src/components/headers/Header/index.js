import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Svg from 'react-svg-inline';
import Logo from '../Logo';
import facebookSvg from '../../icons/iconmonstr-facebook-5.svg';
import styles from './index.css';

const Header = (props, { metadata: { pkg } }) => (

  <header className={ styles.header }>
    <Logo></Logo>
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
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
