import React from "react";
import styles from './index.css';

const NewsletterSubscriptionForm = () => (
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
);

NewsletterSubscriptionForm.propTypes = {};

export default NewsletterSubscriptionForm;
