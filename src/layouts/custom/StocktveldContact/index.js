import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import OneColumnSection from '../../../components/Content/OneColumnSection';
import NewsletterSubscriptionForm from '../../../components/NewsletterSubscriptionForm';
import SectionImage from '../../../components/Content/SectionImage';
import SectionText from '../../../components/Content/SectionText';
import MailTo from '../../../components/MailTo';
import Infosessies from '../Infosessies';
import Button from '../../../components/Button';
import { Element } from 'react-scroll';

class StocktveldContact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.hashLinkScroll();
  }

  hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ block: "start", behavior: "instant" });
      }, 0);
    }
  }

  render() {
    return (
      <div className={ styles.stocktveld }>
        <Metadata { ...this.props } />
        <ThemeHeader
          height="20vh"
          hero={this.props.head.hero}
          hasLogo={true}
        />
        <NavBar { ...this.props }/>
        <div className={styles.welcomeSections}>
          <TwoColumnSection noPadding>
            <div>
              <SectionText
                title="Contacteer ons"
              >
                <div>We zijn bereikbaar via heel wat kanalen: email, telefoon, persoonlijk contact via onze infosessies,
                  facebook of onze nieuwbrief. Kies het kanaal wat jou het beste ligt om kennis met ons te maken.
                </div>
                <br/>
                <div>Email:
                  <MailTo emailAddress="stocktveld@gmail.com" text=" stocktveld@gmail.com "
                          subject="Interesse%20in%20stocktveld"/>
                </div>
                <div>Telefoonnummer: 09 278 08 43</div>
              </SectionText>
            </div>
            <SectionImage imageSource="/assets/img/contact/hands-holding-jigsaw.png" imageAlt="contact"/>
          </TwoColumnSection>
          <div className={styles.buttons}>
            <Button
              linkText="Infosessies"
              href="infosessies"
              isScrollLink={true}
              type={Button.TYPE.GHOST}
            />
            <Button
              linkText="Email"
              href="email"
              isScrollLink={true}
              type={Button.TYPE.FULL}
            />
            <Button
              linkText="Nieuwsbrief"
              href="nieuwsbrief"
              isScrollLink={true}
              type={Button.TYPE.GHOST}
            />
            <Button
              linkText="Facebook"
              href="facebook"
              isScrollLink={true}
              type={Button.TYPE.FULL}
            />
          </div>
          <hr/>
          <Element name="infosessies" id="infosessies">
            <OneColumnSection>
              <Infosessies />
            </OneColumnSection>
          </Element>
          <hr/>
          <TwoColumnSection>
            <Element name="facebook" id="facebook">
              <SectionText
                title="Facebook"
              >
                <div>Via onze facebookpagina kun je op de hoogte blijven van het reilen en zeilen binnen het project.
                  Neem gerust een kijkje!
                </div>
                <Button
                  linkText="Bekijk hier onze posts, ook als je geen lid bent Facebook"
                  href="/facebook"
                  type={Button.TYPE.GHOST}
                />
              </SectionText>
            </Element>
            <Element name="nieuwsbrief" id="nieuwsbrief">
              <SectionText
                title="Nieuwsbrief"
                text="Wens je graag op de hoogte gehouden te worden van het reilen en zeilen van ons project? Schrijf je dan in voor onze nieuwsbrief."
              />
              <br/>
              <NewsletterSubscriptionForm />
            </Element>
          </TwoColumnSection>
          <hr/>
          <Element name="email" id="eamil">
            <OneColumnSection>
              <SectionText
                title="Email"
              >
                <div>
                  Heb je vragen? Wens je graag een individueel gesprek met 1 van ons? Of zou je graag het klooster en de
                  tuin bezoeken?
                  Dat is mogelijk!
                </div>
                <div>
                  Stuur ons gerust een mail via
                  <MailTo emailAddress="stocktveld@gmail.com" text="stocktveld@gmail.com"
                          subject="Interesse%20in%20stocktveld"/>
                  .
                </div>
              </SectionText>
            </OneColumnSection>
          </Element>
        </div>
      </div>
    )
  }
}


StocktveldContact.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string
};

export default StocktveldContact
