import React from 'react';
import { Link } from 'react-scroll';
import styles from './index.css';

class Pointer extends React.Component {
  constructor(props) {
    super(props);
    this.setInterval = () => this._setInterval();
    this.state = {
      isVisible: true
    }
  }

  componentDidMount() {
    this.setInterval();
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  _setInterval() {
    const interval = 1000;
    window.clearInterval(this.timer);
    this.interval = window.setInterval(
      () => {
        const changeVisibility = () => {
          this.setState({
            isVisible: !this.state.isVisible
          })
        };

        if (this.state.isVisible) {
          setTimeout(changeVisibility, 300);
        } else {
          changeVisibility();
        }
      }, interval);
  }

  render() {
    const { isActive, scrollTo, offset, children } = this.props;
    const { isVisible } = this.state;
    const activeClassName = styles.pointer;
    let className = {};

    if (this.props.className) {
      className = this.props.className + ' ' + activeClassName;
    } else {
      className = activeClassName;
    }

    return (
      <Link
        to={scrollTo}
        spy={true}
        smooth={true}
        offset={offset || -70}
        duration={1000}
        onSetActive={isActive}
        className={className}
        style={{
          cursor: "pointer",
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {children}
        <div
          className={`${styles.pointerIcon} ${!isVisible ? styles.invisible : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg"
               width='54'
               height='54'
               viewBox="0 0 24 24"
          >
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
          </svg>
        </div>
      </Link>
    )
  }
}

Pointer.propTypes = {
  scrollTo: React.PropTypes.string,
  isActive: React.PropTypes.func,
  offset: React.PropTypes.number,
  children: React.PropTypes.object,
  className: React.PropTypes.string
};

export default Pointer;
