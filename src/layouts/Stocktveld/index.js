import React from 'react';
import Page from '../Page';
import styles from './index.css';

const Stocktveld = (props) => {

  return (
    <div className={ styles.flex }>
      <div className={ styles.side }>Hier komt de banner</div>
      <Page { ...props }>
      </Page>
    </div>
  )
};

export default Stocktveld
