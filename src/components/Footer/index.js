import React from 'react';
import styles from './index.css';
import TwoColumnSection from '../Content/TwoColumnSection';

const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <TwoColumnSection
        sectionStyle={{ padding: "20px 0" }}
        childStyle={{ justifyContent: "flex-start" }}
      >
        <div>
          <h4>Stocktveld</h4>
          <p> Blekerijstraat 22 <br/> 8700 Tielt </p>
        </div>
        <div>
          <h4>Schrijf je in voor onze nieuwsbrief</h4>
          <form action="//stocktveld.us14.list-manage.com/subscribe/post?u=041f919b289ed959879e83596&amp;id=11624355c8"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
          >
            <div id="mc_embed_signup_scroll">
              <input
                type="email"
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email"
                required
              />
              <div style={{ position: "absolute", left: "-5000px" }}
                   aria-hidden="true"
              >
                <input type="text"
                       name="b_041f919b289ed959879e83596_11624355c8"
                       tabIndex="-1"
                       value=""
                />
              </div>
              <input type="submit"
                     value="Schrijf je in"
                     name="subscribe"
                     id="mc-embedded-subscribe"
                     className={styles.button}/>
            </div>
          </form>
        </div>
      </TwoColumnSection>
      <p>
        <a
          href={ "http://easybird.be" }
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
