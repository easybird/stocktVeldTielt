import React from 'react';
import styles from './index.css';

const Footer = () => (
  <footer className={ styles.footer }>
    <p>
      <a
        href={ "http://easybird.be" }
        className={ styles.phenomicReference }
      >
        { "Website created by " }
        <span className={ styles.phenomicReferenceName }>
          {  `Easybird.be` }
        </span>
      </a>
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className={ styles.phenomicReference }
      >
        { " and generated with " }
        <span className={ styles.phenomicReferenceName }>
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
