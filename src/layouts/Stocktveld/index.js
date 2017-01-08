import React from 'react';
import NavBar from '../../components/headers/NavBar';
import styles from './index.css';
import WelcomeHeader from "../../components/headers/WelcomeHeader"
import WelcomeSections from "../../components/Content/WelcomeSections"
import Metadata from '../../components/head/Metadata';

const Stocktveld = (props) => {
  return (
    <div className={ styles.stocktveld }>
      <Metadata { ...props } />
      <WelcomeHeader
        scrollTo="welcomeSection"
      />
      <NavBar { ...props }/>
      <WelcomeSections
        percentageSold={props.head.percentageSold}
        scrollElementName="welcomeSection"
      />
    </div>
  )
};

Stocktveld.propTypes = {
  head: React.PropTypes.object.isRequired
}

export default Stocktveld
