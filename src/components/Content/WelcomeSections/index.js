import React from "react";
import styles from "./index.css";
import OneColumnSection from "../OneColumnSection";
import TwoColumnSection from "../TwoColumnSection";
import GoogleMaps from "../../GoogleMaps";
import SectionText from "../SectionText";
import SectionImage from "../SectionImage";
import { Element } from "react-scroll";
import { IMAGE_TYPES } from "../IMAGE_TYPES";
import Infosessies from "../../../layouts/custom/Infosessies";
import Plannen from "../../../layouts/custom/Plannen";
import Paviljoen from "../../../layouts/custom/Paviljoen";
import { quoteSections } from "../../../layouts/custom/StocktveldWieZijnWij/quoteSections";

// TODO for sale icon: http://stockfresh.com/files/r/rastudio/m/83/5887169_stock-vector-for-sale-sign-thin-line-icon.jpg*/
class WelcomeSections extends React.Component {
  render() {
    const QuoteSections = [];
    const { scrollElementName } = this.props;

    quoteSections.forEach((quoteSection, index) => {
      QuoteSections.push(
        <TwoColumnSection key={index} href={quoteSection.href}>
          <SectionImage
            imageSource={quoteSection.imageSource}
            imageAlt={quoteSection.imageAlt}
            imageType={IMAGE_TYPES.ROUND}
          />
          <SectionText
            title={quoteSection.title}
            text={quoteSection.teaser}
            href={quoteSection.href}
            linkText={quoteSection.linkText}
          />
        </TwoColumnSection>
      );
    });

    return (
      <Element name={scrollElementName} className={styles.welcomeSections}>
        {/* <Nieuws /> */}
        <hr />
        <OneColumnSection href="/aanbod">
          <SectionText
            title="Exclusief wonen in het groen met de stad aan je voordeur"
            text="Verborgen achter de historische gevel van het voormalige slotklooster realiseren we het exclusieve project 'Stocktveld'.
      Dit unieke project is een elegant samengaan van energiezuinige nieuwbouw in combinatie met de bewaarde historiciteit van het klooster.
      Het klooster wordt opgeknapt en ten dienste gesteld van alle bewoners.
      De site heeft een bijzonder karakter, met een mooi evenwicht tussen publiek en privé."
            href="/aanbod"
            linkText="Meer weten?"
          />
        </OneColumnSection>
        <hr />
        <TwoColumnSection href="/aanbod">
          <SectionText
            title="Uniek klooster met 3 renovatie loften, 20 nieuwbouwwoningen en 14 appartementen"
            text="Met een enorm divers aanbod aan woningen, appartementen en renovatie biedt Stocktveld voor elk wat wils. Het project is een collectief particulier bouwproject op de site van het voormalig slotklooster aan het station van Tielt. Er zijn 37 individuele woningen van verschillende groottes met elk een eigen private buitenruimte in de vorm van een tuintje of een terras. Daarnaast is er een grote gemeenschappelijke tuin die eigendom is van alle bewoners en enkele gemeenschappelijke faciliteiten zoals onder andere een (feest)zaal met uitgeruste keuken, gastenkamers, bibliotheek, wassalon en kantoorruimte."
            href="/aanbod"
            linkText="Ontdek het aanbod"
            customStyle={{ marginTop: "50px" }}
          />
          <SectionImage
            imageSource="/assets/img/aanbod/render_small.jpg"
            imageAlt="Render klooster"
          />
        </TwoColumnSection>
        <hr />
        <TwoColumnSection href="/locatie">
          <SectionText
            key="locationText"
            title="Bouw mee aan een warme buurt binnen een mooie stad"
            text="Stocktveld is gelegen in het hartje van Tielt, met zijn locatie vlakbij het
            station, met scholen binnen handbereik, is het ideaal gelegen."
            href="/locatie"
            linkText="Bekijk de locatie"
          />
          <GoogleMaps />
        </TwoColumnSection>
        <hr />
        <OneColumnSection href="/contact" noOverlay>
          <Infosessies href="/contact" linkText="Contact" />
        </OneColumnSection>
        <hr />
        <OneColumnSection href="/aanbod" noCentered noOverlay>
          <Plannen isTeaser />
          <SectionText href="/aanbod" linkText="Bekijk meer details" />
        </OneColumnSection>
        <hr />
        <OneColumnSection href="/aanbod#paviljoen" noCentered>
          <Paviljoen noPadding />
          <SectionText href="/aanbod" linkText="Lees meer" />
        </OneColumnSection>
      </Element>
    );
  }
}

WelcomeSections.propTypes = {
  scrollElementName: React.PropTypes.string,
  percentageSold: React.PropTypes.number.isRequired
};

export default WelcomeSections;
