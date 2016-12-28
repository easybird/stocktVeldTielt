import React, { PropTypes } from 'react';
import NavBar from '../../components/headers/NavBar';
import { BodyContainer } from 'phenomic';
import styles from './index.css';
import Loading from '../../components/Loading';
import Header from '../../components/headers/Header';
import Metadata from '../../components/head/Metadata';

const StocktveldPage = (props) => {
  const {
    isLoading,
    head,
    body,
  } = props;

  return (
    <div className={ styles.stocktveld }>
      <Metadata { ...props } />
      <Header/>
      <NavBar { ...props }/>
      {
        head.pageTitle &&
        <h1 className={ styles.heading }>{ head.pageTitle }</h1>
      }
      {
        isLoading
          ? <Loading />
          : <BodyContainer>{ body }</BodyContainer>
      }
    </div>
  )
};

StocktveldPage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string
};

export default StocktveldPage
