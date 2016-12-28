import React from 'react';
import Logo from '../Logo';
import styles from './index.css';

const Header = () =>
  (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo/>
      </div>
    </header>
  );

export default Header
