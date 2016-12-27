import React from 'react';
import Logo from '../Logo';
import NavBar from '../NavBar';
import styles from './index.css';

const Header = (props) => (
  <div className={ styles.header }>
    <Logo scrollTo={ props.scrollTo }/>
    <NavBar {...props}/>
  </div>
);

Header.propTypes = {
  scrollTo: React.PropTypes.string
}

export default Header
