import React from 'react';
import Page from '../Page';
import NavBar from '../../components/headers/NavBar';
import styles from './index.css';
import WelcomeHeader from "../../components/headers/WelcomeHeader"

const Stocktveld = (props) => {
  return (
    <div className={ styles.flex }>
      <WelcomeHeader/>
      <NavBar { ...props }/>
      <Page { ...props }>
      </Page>
    </div>
  )
};

export default Stocktveld
