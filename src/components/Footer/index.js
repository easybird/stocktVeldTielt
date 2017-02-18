import React from 'react';
import styles from './index.css';
import TwoColumnSection from '../Content/TwoColumnSection';
import NewsletterSubscriptionForm from '../NewsletterSubscriptionForm';

const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <TwoColumnSection
        sectionStyle={{ padding: "20px 0", margin: "0" }}
        childStyle={{ justifyContent: "flex-start" }}
      >
        <div className={styles.content}>
          <h4>Stocktveld</h4>
          <p> Blekerijstraat 22 <br/> 8700 Tielt </p>
        </div>
        <div className={styles.content}>
          <h4>Schrijf je in voor onze nieuwsbrief</h4>
          <NewsletterSubscriptionForm />
        </div>
      </TwoColumnSection>
      <p>
        <a
          href={ "http://easybird.be" }
          target="_blank"
          className={ styles.phenomicReference }
        >
          { "Website gemaakt door " }
          <span className={ styles.phenomicReferenceName }>
          {  `Easybird.be` }
        </span>
        </a>
      </p>
    </footer>
  )
};

export default Footer
