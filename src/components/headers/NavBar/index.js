import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Svg from 'react-svg-inline';
import facebookSvg from '../../icons/iconmonstr-facebook-5.svg';
import styles from './index.css';

class NavBar extends React.Component {

  componentDidMount() {
    console.log('test1:');
    const coordinates = ReactDOM.findDOMNode(this.refs.nav);
    const specs = coordinates.getBoundingClientRect();
    // Below: specs = ClientRect {} bottom: 269 height: 18 left: 797.546875 right: 1062.609375 top: 251 width: 265.0625proto: ClientRect
    console.log('test:' + specs.top);
  }

  render() {
    const { metadata: { pkg } } = this.context;

    return (
      <nav ref="nav" className={styles.navBarWrapper}>
        <div className={styles.navBar}>
          <i className={`${styles.icon} material-icons`}>view_headline</i>
          <span className={styles.menuIcon}></span>
          <div className={`${styles.navBarCollapse} ${styles.collapse}`}></div>
        </div>
        <ul className={styles.mainNav}>
          <li>
            <Link
              className={ styles.link }
              to="/"
            >
              { "Home" }
            </Link>
          </li>
          <li>
            <Link
              className={ styles.link }
              to="/"
            >
              { "Locatie" }
            </Link>
          </li>
          <li>
            <Link
              className={ styles.link }
              to="/"
            >
              { "Aanbod" }
            </Link>
          </li>
          <li>
            <Link
              className={ styles.link }
              to="/"
            >
              { "Verhalen" }
            </Link>
          </li>
          <li>
            <Link
              className={ styles.link }
              to="/"
            >
              { "Contact" }
            </Link>
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
    );
  }
}

NavBar.propTypes = {};

NavBar.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default NavBar;
