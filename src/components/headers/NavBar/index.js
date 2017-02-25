import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './index.css';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = (event) => this._handleScroll(event);
    this.initialiseScrollEvent = () => this._initialiseScrollEvent();

    this.state = {
      isFixed: false,
      isVisible: false,
      originalNavBarHeight: undefined
    }
  }

  componentDidMount() {
    this.initialiseScrollEvent();
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('touchmove', this.handleScroll, true);
    window.addEventListener("gesturestart", this.handleScroll, true);
    window.addEventListener("touchstart", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('touchmove', this.handleScroll);
    window.removeEventListener('gesturestart', this.handleScroll);
    window.removeEventListener('touchstart', this.handleScroll);
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
    const { isFixed, isVisible } = this.state;

    return (
      <nav ref={node => this.nav = node}>
        <div className={`${(isFixed ? styles.navBarFakeTop : '')}`}></div>
        <div className={`${styles.navBarWrapper} ${(isFixed ? styles.navBarWrapperTop : '')}`}>
          <a
            href={undefined}
            onClick={() => this.setState({ isVisible: !isVisible })}
            className={styles.mobileNavBar}>

            <i className={`${styles.icon} material-icons md-36`}>
              {isVisible ? 'clear_all' : 'view_headline'}
            </i>
          </a>
          <ul
            className={`${styles.mainNav} ${isVisible ? styles.visible : ''}`}
          >
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
                to="/locatie"
              >
                { "Locatie" }
              </Link>
            </li>
            <li>
              <Link
                className={ styles.link }
                to="/aanbod"
              >
                { "Aanbod" }
              </Link>
            </li>
            <li>
              <Link
                className={ styles.link }
                to="/wie-zijn-we"
              >
                { "Wie zijn we" }
              </Link>
            </li>
            <li>
              <Link
                className={ styles.link }
                to="/contact"
              >
                { "Contact" }
              </Link>
            </li>
            <li>
              <Link
                className={ styles.link }
                to="/social-media"
              >
                { "Sociale media" }
              </Link>
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
