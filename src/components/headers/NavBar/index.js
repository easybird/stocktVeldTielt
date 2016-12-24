import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Svg from 'react-svg-inline';
import facebookSvg from '../../icons/iconmonstr-facebook-5.svg';
import styles from './index.css';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = (event) => this._handleScroll(event);
    this.initialiseScrollEvent = () => this._initialiseScrollEvent();

    this.state = {
      isFixed: false,
      originalNavBarHeight: undefined
    }
  }

  componentDidMount() {
    this.initialiseScrollEvent();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  _initialiseScrollEvent() {
    const navBarBounds = this.nav.getBoundingClientRect();

    if (!this.originalNavBarHeight) {
      this.setState({ originalNavBarHeight: navBarBounds.top });
    }
  }

  _handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;

    var isFixedAndAboveNavbar = this.state.isFixed && scrollTop < this.state.originalNavBarHeight;
    if (isFixedAndAboveNavbar) {
      this.setState({
        isFixed: false
      })
    } else {
      const isBelowNavbar = !this.state.isFixed && this.nav.getBoundingClientRect().top <= 0;

      if (isBelowNavbar) {
        this.setState({
          isFixed: true,
          navBarHeight: scrollTop
        })
      }
    }
  }

  render() {
    const { metadata: { pkg } } = this.context;
    const { isFixed } = this.state;

    return (
      <nav ref={node => this.nav = node}>
        <div className={`${(isFixed ? styles.navBarFakeTop : '')}`}></div>
        <div className={`${styles.navBarWrapper} ${(isFixed ? styles.navBarWrapperTop : '')}`}>
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
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {};

NavBar.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default NavBar;
