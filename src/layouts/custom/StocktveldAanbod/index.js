import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import OneColumnSection from '../../../components/Content/OneColumnSection';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import SectionImage from '../../../components/Content/SectionImage';
import SectionText from '../../../components/Content/SectionText';
import Button from '../../../components/Button';
import Quote from '../../../components/Quote';
import ExternalLink from '../../../components/ExternalLink';
import Plannen from '../Plannen';
import Paviljoen from '../Paviljoen';
import { Element } from 'react-scroll';

class StocktveldAanbod extends Component {
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
          <Element name="intro">
            <OneColumnSection>
              <div>
                <SectionText
                  title="Wat hebben we te bieden?"
                  text="37 woningen en appartementen (60- 145 &#13217;) in een voormalig slotklooster vlak bij het station, elk met zijn privétuin of terras. Een grote groene gedeelde tuin, gemeenschappelijke leefruimtes (500 &#13217;) voor wie wil: eetplaats, keuken, bureau, vergaderzaal, logeerkamer, wasruimte en atelier. De mogelijkheid om externe functies zoals een kantoor of B&B in het gebouw onder te brengen"
                />
              </div>
            </OneColumnSection>
            <div className={styles.buttons}>
              <Button
                linkText="Plannen & Prijzen"
                href="plannen"
                isScrollLink={true}
                type={Button.TYPE.GHOST}
              />
              <Button
                linkText="Timing"
                href="timing"
                isScrollLink={true}
                type={Button.TYPE.FULL}
              />
              <Button
                linkText="Partners"
                href="partners"
                isScrollLink={true}
                type={Button.TYPE.GHOST}
              />
              <Button
                linkText="Commerciële ruimtes te koop"
                href="commercieel"
                isScrollLink={true}
                type={Button.TYPE.FULL}
              />
              <Button
                linkText="Van klooster tot paviljoen"
                href="paviljoen"
                isScrollLink={true}
                type={Button.TYPE.GHOST}
              />
            </div>
          </Element>
          <br/>
          <hr/>
          <Element name="plannen" id="plannen">
            <OneColumnSection
              noCentered={true}>
              <Plannen></Plannen>
            </OneColumnSection>
          </Element>
          <hr/>
          <OneColumnSection>
            <Quote
              text="Bij ons krijg je méer voor hetzelfde bedrag: grote tuin en terrassen, moestuin, extra lounge -en eetruimte, extra was- en plasplaats, extra bureau -en ontspanningsruimtes."/>
          </OneColumnSection>
          <hr/>
          <Element name="timing">
            <TwoColumnSection
              title="Timing">
              <SectionText>
                <div style={{ textAlign: "justify" }}>
                  Tegen halverwege 2017 ronden we het ontwerpproces af en vragen we de bouwvergunning aan. Eind 2017
                  denken we de vergunning op zak te hebben en te beginnen bouwen. Begin 2019, willen we
                  verhuizen naar het ‘Stocktveld’.
                </div>
                <div></div>
              </SectionText>
              <SectionImage imageSource="/assets/img/aanbod/timing/timing.jpg" imageAlt="timing"/>
            </TwoColumnSection>
          </Element>
          <hr/>
          <Element name="partners">
            <TwoColumnSection
              title="Onze partners">
              <SectionImage imageSource="/assets/img/aanbod/partners1.png" imageAlt="partners"/>
              <SectionText>
                <div style={{ textAlign: "justify" }}>
                  <div>We kunnen dit uiteraard niet alleen. Om een kwalitatief en duurzaam project te realiseren op een
                    betaalbare manier heeft Stocktveld
                    enkele goeie partners onder de arm genomen.
                  </div>
                  <div>
                    We kozen voor het team van architectenbureau <ExternalLink href="http://www.architec.be"
                                                                               text="aRCHITEC"/> uit Wevelgem, aangevuld
                    met landschapsbureau
                    <ExternalLink href="http://studiobasta.be" text="Studio Basta"/> en bouwfysisch ingenieursbureau
                    <ExternalLink href="http://www.daidalospeutz.be/" text="Daidalos Peutz"/>.
                    De bouwfirma <ExternalLink href="http://www.dumobil.be" text="Dumobil"/>, gekend van villabouw en
                    woonprojecten, zorgt voor de bouw van onze
                    wooneenheden.
                    <ExternalLink href="http://cohousingprojects.be" text="Cohousing Projects"/> werd aangenomen voor de
                    nodige ondersteuning, coördinatie en expertise.
                    Zij bieden Stocktveld een totaalbegeleiding doorheen het ganse proces: gaande van groepsbegeleiding,
                    over commerciële onderhandelingen, tot financiële ondersteuning.
                  </div>
                  <div>Deze partners helpen ons bij het ontwerpen en implementeren van het bouw - en groepsproces.
                    De toekomstige bewoners van Stocktveld nemen wel steeds de uiteindelijke beslissingen in een
                    consensusmodel.
                  </div>
                </div>
                <div></div>
              </SectionText>
            </TwoColumnSection>
          </Element>
          <hr/>
          <Element name="commercieel">
            <TwoColumnSection
            title="Uw eigen zaak of kantoorruimte in Stocktveld?">
              <SectionText>
                <div style={{ textAlign: "justify" }}>
                  <h3>Apotheek? Bakkerij? Horeca? Yogaruimte? Dat kan!
                  </h3>
                  <div> Het volume en de inrichting van uw werkruimte is op dit moment nog volledig in te vullen.
                    Oppervlaktes gaan van 20 vierkante meter tot 734 vierkante meter.
                  </div>
                  <br/>
                  <div>
                    <h3>Werken dichtbij huis: Dat kan!</h3>
                    U heeft de mogelijkheid om uw praktijkruimte te laten aansluiten op
                    uw
                    eigen woning. Bovendien is de aankoop van een handelsruimte met woning een goede investering voor de
                    toekomst.
                  </div>
                  <br/>
                  <div>
                    <h3>Troeven:</h3>
                    <ul style={{
                      listStyleType: 'disc',
                      listStylePosition: 'inside',
                      textIndent: '-2em',
                      paddingLeft: '2em'
                    }}>
                      <li>Wandelafstand tot het centrum van Tielt</li>
                      <li>Aansluiting op alle openbaar vervoer</li>
                      <li> Gelegen in een woonproject met meer dan 100 inwoners
                      </li>
                      <li> Ontwikkeling van nieuwbouwprojecten op aanpalende percelen
                      </li>
                    </ul>
                  </div>
                  <br/>
                  <div>
                    <h3>Iets voor u? </h3>
                    Hoe vroeger u beslist, hoe meer keuzevrijheid er is over de positie, woning en indeling
                    van uw werkruimte/woning. Dit kan gaan van een kleine kantoorruimte tot een volledige
                    kloostervleugel.
                  </div>
                  <Button
                    linkText="Meer info? Contacteer ons!"
                    href="/contact"
                    type={Button.TYPE.GHOST}
                  />
                </div>
                <div></div>

              </SectionText>
              <SectionImage imageSource="/assets/img/aanbod/commercieel/business_ideas.jpg"
                            imageAlt="commerciële ruimte"/>
            </TwoColumnSection>
          </Element>
          <hr/>
          <Element name="paviljoen" id="paviljoen">
            <Paviljoen/>
          </Element>
        </div>
      </div>
    )
  }
}


StocktveldAanbod.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string
};

export default StocktveldAanbod
