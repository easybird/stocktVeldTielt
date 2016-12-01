import React from 'react';
import Logo from '../Logo';
import NavBar from '../NavBar';
import styles from './index.css';

const Header = (props) => (
  <div className={ styles.header }>
    <Logo/>
    <NavBar {...props}/>
  </div>
)

export default Header
