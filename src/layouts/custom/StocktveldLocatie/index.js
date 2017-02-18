import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import OneColumnSection from '../../../components/Content/OneColumnSection';
import GoogleMaps from '../../../components/GoogleMaps';
import SectionImage from '../../../components/Content/SectionImage';
import SectionText from '../../../components/Content/SectionText';

class StocktveldLocatie extends Component {
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
          height="50vh"
          hero={this.props.head.hero}
        />
        <NavBar { ...this.props }/>
        <div className={styles.welcomeSections}>
          <TwoColumnSection>
            <div>
              <SectionText
                title="Locatie"
                text="Stocktveld is gelegen in het hartje van Tielt, met zijn locatie vlakbij het
            station, met scholen binnen handbereik, is het ideaal gelegen."
              />
            </div>
            <SectionImage imageSource="/assets/img/locatie/omslagfoto-kloostersite.jpg"
                          imageAlt="omslagfoto kloostersite"/>
          </TwoColumnSection>
          <TwoColumnSection>
            <SectionImage imageSource="/assets/img/locatie/klooster.jpg"
                          imageAlt="omslagfoto kloostersite"/>
            <div>
              <SectionText
                title="Slotklooster aan het station"
                text="Het slotklooster ligt aan de achterzijde van het station van Tielt op het uiteinde van de Blekerijstraat. Het is een sober neogotisch gebouwencomplex met grotendeels ommuurde tuin. De totale kloostersite is ongeveer 1,3 ha groot en ligt in een zone die op het gewestplan is aangeduid als woonzone. Ons plan is om de bestaande site te renoveren, en hier nieuwbouwwoningen bij te plaatsen."
              />
            </div>
          </TwoColumnSection>
          <TwoColumnSection>
            <div>
              <SectionText
                title="Grote tuin middenin de stad"
                text="Onze droom is ook om van de grote tuin een echt pareltje te maken. Geen strak afgelijnde groenstructuren, maar eerder een combinatie van frisse groenpartijen, ontmoetingsplaatsen voor jong en oud, ingebouwde natuurlijke speelelementen voor kinderen, kalme hoekjes, hier en daar een bankje, … Wonen in een groene oase van rust, met ruimte voor privacy en informele contacten, hier streven we naar."
              />
            </div>
            <SectionImage imageSource="/assets/img/locatie/tuin-achterkant.jpg"
                          imageAlt="omslagfoto kloostersite"/>
          </TwoColumnSection>
          <OneColumnSection>
            <GoogleMaps/>
          </OneColumnSection>
        </div>
      </div>
    )
  }
}


StocktveldLocatie.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string
};

export default StocktveldLocatie
