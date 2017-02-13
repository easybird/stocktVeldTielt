import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import SectionImage from '../../../components/Content/SectionImage';
import SectionText from '../../../components/Content/SectionText';
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
          height="15vh"
          hero={this.props.head.hero}
          hasLogo={true}
        />
        <NavBar { ...this.props }/>
        <div className={styles.welcomeSections}>
          <Element name="intro">
            <TwoColumnSection>
              <div>
                <SectionText
                  title="Contacteer ons"
                  text="We zijn bereikbaar via heel wat kanalen: email, telefoon, persoonlijk contact via onze infosessies, facebook of onze nieuwbrief. Kies het kanaal wat jou het beste ligt om kennis met ons te maken."
                />
              </div>
              <SectionImage imageSource="/assets/img/contact/hands-holding-jigsaw.png" imageAlt="contact"/>
            </TwoColumnSection>
          </Element>
          <Element name="email">
            <TwoColumnSection>
              <SectionText
                title="Infosessies"
                text="Wij organiseren regelmatig een infosessie over ons woonproject. De infosessies vinden steeds plaats op onze site in de Blekerijstraat nr. 22.
De data van de eerstkomende infosessies zijn - VUL DIE HIER AAN. Deze worden telkens georganiseerd in het klooster, Blekerijstraat 22 te Tielt."
              />
              <SectionText
                title="Email"
                text="Vragen? Stuur ons gerust een mail via stocktveld@gmail.com. Indien je graag een individueel gesprek hebt met 1 van ons, het klooster en de tuin wenst te bezoeken,... dan is dit mogelijk!"
              />
            </TwoColumnSection>
          </Element>
          <Element name="infosessie">
            <TwoColumnSection>
              <SectionText
                title="Facebook"
                text="Via onze facebookpagina kun je op de hoogte blijven van het reilen en zeilen binnen het project. Neem gerust een kijkje!"
              />
              <SectionText
                title="Nieuwsbrief"
                text="Wens je graag op de hoogte gehouden te worden van het reilen en zeilen van ons project? Schrijf je dan in voor onze nieuwsbrief."
              />
            </TwoColumnSection>
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
