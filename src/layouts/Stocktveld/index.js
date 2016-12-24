import React from 'react';
import NavBar from '../../components/headers/NavBar';
import styles from './index.css';
import WelcomeHeader from "../../components/headers/WelcomeHeader"
import WelcomeSections from "../../components/Content/WelcomeSections"

const Stocktveld = (props) => {
  return (
    <div className={ styles.flex }>
      <WelcomeHeader scrollTo="welcomeSection"/>
      <NavBar { ...props }/>

      <WelcomeSections scrollElementName="welcomeSection"/>
    </div>
  )
};

export default Stocktveld
