import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import OneColumnSection from '../../../components/Content/OneColumnSection';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import SectionImage from '../../../components/Content/SectionImage';
import SectionVideo from '../../../components/Content/SectionVideo';
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
        <NavBar { ...this.props } />
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
          <br />
          <hr />
          <Element name="plannen" id="plannen">
            <OneColumnSection
              noCentered={true}>
              <Plannen></Plannen>
            </OneColumnSection>
          </Element>
          <hr />
          <OneColumnSection>
            <Quote
              text="Bij ons krijg je méer voor hetzelfde bedrag: grote tuin en terrassen, moestuin, extra lounge -en eetruimte, extra was- en plasplaats, extra bureau -en ontspanningsruimtes." />
          </OneColumnSection>
          <hr />
          <Element name="timing">
            <TwoColumnSection title="Timing">
              <SectionImage imageSource="/assets/img/aanbod/timing/timing.jpg" imageAlt="timing" />
              <SectionText>
                <div style={{ textAlign: "justify" }}>
                  <h3>Wat hebben we al achter de rug?</h3>
                  <h3>Wedstrijdontwerp</h3>
                  <div> Via een uitgeschreven wedstrijdontwerp kwamen we in 2016 tot de keuze van onze architect.
                    In het winnende wedstrijdontwerp worden de woningen , appartementen en het klooster met elkaar
                    verbonden door een functionele galerij.
                    De collectieve buitenruimte bestaat uit gezellig plein tussen de woningen, appartementen en
                    klooster, en een natuurlijke tuin rondom de woningen.
                    Parkeren gebeurt vooraan op de site zodat het project grotendeels autovrij, en dus bijzonder
                    kindvriendelijk, is.
                  </div>
                </div>
                <div></div>
              </SectionText>
            </TwoColumnSection>
            <TwoColumnSection
              childStyle={{ margin: 0 }}>
              <SectionText>
                <div style={{ textAlign: "justify" }}>
                  <h3>Waarmee zijn we bezig?</h3>
                  <h3>Ontwerp tuin</h3>
                  <div className={`${styles.card} ${styles.newParagraph}`}>
                    Na de zomer van 2016 presenteerde Studio Basta het voorontwerp voor het plein en de tuin op basis
                    van de feedback van de bewonersgroep.
                    De hoofdlijnen uit het wedstrijdontwerp werden behouden, maar het binnenplein kreeg een andere
                    uitstraling.
                    Het geheel oogt zeer groen en stimuleert ongedwongen gebruik en informeel contact.
                  </div>
                  <div style={{ display: "flex" }}>
                    <SectionImage imageSource="/assets/img/aanbod/timing/schets-binnenhof.png"
                                  imageAlt="schets binnenhof" />
                    <SectionImage imageSource="/assets/img/aanbod/timing/schets-binnenhof2.png"
                                  imageAlt="schets binnenhof" />
                  </div>
                  <h3>Voorontwerp woningen</h3>
                  <div className={`${styles.card} ${styles.newParagraph}`}>
                    De voorontwerpen van de nieuwbouwwoningen werden door de architect al opgeleverd.
                    De toekomstige bewoners kozen allemaal een unit en bezitten een eigen plan en een eerste bestek van
                    hun unit. Elke woning beschikt over een privétuin.
                    Er werden verschillende typologieën ontworpen, waaruit de toekomstige instappers kunnen kiezen.
                    Hoe vroeger men instapt, hoe meer men zijn huis nog kan aanpassen.
                  </div>
                  <h3>Voorontwerp klooster</h3>
                  <div className={`${styles.card} ${styles.newParagraph}`}>
                    Het bouwteam (het bewonersteam verantwoordelijk voor de bouw) ging ook samen met de architect aan de
                    slag om een voorontwerp van het verbouwde klooster op te stellen.
                    De keuken krijgt een mooie aansluiting met de eetruimte.
                    Daarnaast krijgt de bureauruimte een mooie doorkijk op de eetruimte, en komt er een wasbar met veel
                    licht en ruimtegevoel richting de tuin.
                  </div>
                  <h3>Voorontwerp appartementen</h3>
                  <div className={`${styles.card} ${styles.newParagraph}`}>
                    De architect is op dit moment het voorontwerp van de appartementen aan het finaliseren. Daarbij
                    wordt samen met de toekomstige appartementsbewoners en het bouwteam gekeken voor de ideaal mogelijke
                    inrichting van de beschikbare appartementsruimte.
                    De bedoeling is om een heel divers pakket van kleine tot grote appartementen aan te bieden, élk met
                    zijn eigen privé terras.
                    Hoe vroeger men instapt, hoe meer impact men heeft op de plannen en het bouwproces. Nu al instappen
                    is dus de boodschap.
                  </div>
                  <div className={`${styles.card} ${styles.newParagraph}`}>
                  <h3>Wat brengt de toekomst?</h3>
                    <ul style={{
                      listStyleType: 'disc',
                      listStylePosition: 'inside',
                      textIndent: '-2em',
                      paddingLeft: '2em'
                    }}>
                      <li>Tegen halverwege 2017 ronden we het ontwerpproces af en vragen we de bouwvergunning aan.</li>
                      <li>Eind 2017
                        denken we de vergunning op zak te hebben en te beginnen bouwen.
                      </li>
                      <li> Begin 2019, willen we
                        verhuizen naar het ‘Stocktveld’.
                      </li>
                    </ul>
                  </div>
                  <div className={`${styles.card} ${styles.newParagraph}`}>
                  <h3>Iets voor u? </h3>
                    Hoe vroeger u beslist, hoe meer keuzevrijheid en inspraak.
                  </div>
                  <Button
                    linkText="Meer info? Contacteer ons!"
                    href="/contact"
                    type={Button.TYPE.GHOST}
                  />
                  </div>
                <div></div>
              </SectionText>
              <div>
                <div className={styles.card}>
                  <SectionImage imageSource="/assets/img/aanbod/timing/maquette2.jpg" imageAlt="maquette" />
                </div>
                <div className={styles.card}>
                  <SectionImage imageSource="/assets/img/aanbod/timing/foto_binnenzicht_small.jpg"
                                imageAlt="foto binnen" />
                </div>
                <div className={styles.card}>
                  <SectionVideo
                    src="https://www.youtube.com/embed/l6hfWPcE400?autoplay=1&loop=1&playlist=l6hfWPcE400"
                  /></div>
              </div>
            </TwoColumnSection>
          </Element>
          <hr />
          <Element name="partners">
            <TwoColumnSection
              title="Onze partners">
              <SectionImage imageSource="/assets/img/aanbod/partners1.png" imageAlt="partners" />
              <SectionText>
                <div style={{ textAlign: "justify" }}>
                  <div>We kunnen dit uiteraard niet alleen. Om een kwalitatief en duurzaam project te realiseren op een
                    betaalbare manier heeft Stocktveld
                    enkele goeie partners onder de arm genomen.
                  </div>
                  <div>
                    We kozen voor het team van architectenbureau <ExternalLink href="http://www.architec.be"
                                                                               text="aRCHITEC" /> uit Wevelgem,
                    aangevuld
                    met landschapsbureau
                    <ExternalLink href="http://studiobasta.be" text="Studio Basta" /> en bouwfysisch ingenieursbureau
                    <ExternalLink href="http://www.daidalospeutz.be/" text="Daidalos Peutz" />.
                    De bouwfirma <ExternalLink href="http://www.dumobil.be" text="Dumobil" />, gekend van villabouw en
                    woonprojecten, zorgt voor de bouw van onze
                    wooneenheden.
                    <ExternalLink href="http://cohousingprojects.be" text="Cohousing Projects" /> werd aangenomen voor
                    de
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
          <hr />
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
                  <br />
                  <div>
                    <h3>Werken dichtbij huis: Dat kan!</h3>
                    U heeft de mogelijkheid om uw praktijkruimte te laten aansluiten op
                    uw
                    eigen woning. Bovendien is de aankoop van een handelsruimte met woning een goede investering voor de
                    toekomst.
                  </div>
                  <br />
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
                  <br />
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
                            imageAlt="commerciële ruimte" />
            </TwoColumnSection>
          </Element>
          <hr />
          <Element name="paviljoen" id="paviljoen">
            <Paviljoen />
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
