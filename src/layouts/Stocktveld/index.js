import React from 'react';
import Page from '../Page';

const Stocktveld = (props) => {

  return (
    <div>
      <div>Hier komt de banner</div>
      <Page { ...props }>
        <h2>{ "Laatste nieuws" }</h2>
        <div>Internal shizzle at the end of the page</div>
      </Page>
    </div>
  )
};

export default Stocktveld
