import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import SectionImage from '../../../components/Content/SectionImage';
import SectionText from '../../../components/Content/SectionText';
import Button from '../../../components/Button';
import Pointer from '../../../components/Pointer';
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
            <TwoColumnSection>
              <div>
                <SectionText
                  title="Wat hebben we te bieden?"
                  text="37 woningen en appartementen (60- 145 m2) in een voormalig slotklooster vlak bij het station, elk met zijn privétuin of terras. Een grote groene gedeelde tuin, gemeenschappelijke leefruimtes (500m2) voor wie wil: eetplaats, keuken, bureau, vergaderzaal, logeerkamer, wasruimte en atelier. De mogelijkheid om externe functies zoals een kantoor of B&B in het gebouw onder te brengen"
                />
              </div>
              <SectionImage imageSource="/assets/img/aanbod/plattegrond_small.png" imageAlt="plattegrond"/>
            </TwoColumnSection>
            <div className={styles.buttons}>
              <Button
                linkText="Partners"
                href="partners"
                isScrollLink={true}
                type={Button.TYPE.FULL}
              />
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
                linkText="Commerciële ruimtes te koop"
                href="commercieel"
                isScrollLink={true}
                type={Button.TYPE.GHOST}
              />
            </div>
            <div className={styles.buttons}>
              <Pointer
                scrollTo="partners"
              />
            </div>
          </Element>
          <Element name="partners">
            <TwoColumnSection>
              <SectionText
                title="Onze partners"
              >
                <div style={{textAlign: "justify"}}>Om een kwalitatief en duurzaam project te realiseren op een betaalbare manier heeft Stocktveld
                  enkele goeie partners onder de arm genomen.
                </div>
                <div style={{textAlign: "justify"}}>We kozen voor het team van architectenbureau aRCHITEC uit Wevelgem, aangevuld met landschapsbureau
                  Studio Basta en bouwfysisch ingenieursbureau Daidalos Peutz. We kiezen ervoor om… Zij zorgen ervoor
                  dat …
                </div>
                <div style={{textAlign: "justify"}}>De bouwfirma Dumobil - gekend van villabouw en woonprojecten - zorgt voor de bouw van onze
                  wooneenheden.
                </div>
                <div style={{textAlign: "justify"}}>
                  Cohousing Projects werd aangenomen voor de nodige ondersteuning, coördinatie en expertise.
                  Zij bieden Stocktveld een totaalbegeleiding doorheen het ganse proces: gaande van groepsbegeleiding,
                  over commerciële onderhandelingen, tot financiële ondersteuning.
                </div>
                <div style={{textAlign: "justify"}}>Deze partners helpen ons bij het ontwerpen en implementeren van het bouw - en groepsproces. Echter,
                  de groep rond Stocktveld neemt steeds de uiteindelijke beslissingen.
                </div>
              </SectionText>
              <SectionImage imageSource="/assets/img/aanbod/partners1.png" imageAlt="partners"/>
            </TwoColumnSection>
          </Element>
          <Element name="plannen">
            <TwoColumnSection>
              <SectionImage imageSource="/assets/img/aanbod/plattegrond_small.png" imageAlt="plattegrond"/>
              <SectionText
                title="Plannen en prijzen"
                text=""
              />
            </TwoColumnSection>
          </Element>
          <Element name="timing">
            <TwoColumnSection>
              <SectionText
                title="Timing"
                text=""
              />
              <SectionImage imageSource="/assets/img/aanbod/plattegrond_small.png" imageAlt="plattegrond"/>
            </TwoColumnSection>
          </Element>
          <Element name="commercieel">
            <TwoColumnSection>
              <SectionText
                title="Commerciële ruimte"
                text=""
              />
              <SectionImage imageSource="/assets/img/aanbod/plattegrond_small.png" imageAlt="plattegrond"/>
            </TwoColumnSection>
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
