import React from 'react';
import Page from '../Page';
import styles from './index.css';
import WelcomeHeader from "../../components/headers/WelcomeHeader"

const Stocktveld = (props) => {
  return (
    <div className={ styles.flex }>
      <WelcomeHeader/>
      <Page { ...props }>
      </Page>
    </div>
  )
};

export default Stocktveld
