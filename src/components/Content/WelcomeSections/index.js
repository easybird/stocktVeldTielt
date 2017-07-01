import React from "react";
import styles from "./index.css";
import OneColumnSection from "../OneColumnSection";
import TwoColumnSection from "../TwoColumnSection";
import GoogleMaps from "../../GoogleMaps";
import SectionText from "../SectionText";
import SectionImage from "../SectionImage";
import { Element } from "react-scroll";
import { IMAGE_TYPES } from "../IMAGE_TYPES";
import Carousel from "../../../layouts/Carousel";
import Infosessies from "../../../layouts/custom/Infosessies";
import Plannen from "../../../layouts/custom/Plannen";
import Paviljoen from "../../../layouts/custom/Paviljoen";
import Nieuws from "../../../layouts/custom/Nieuws";
import Sold from "../../icons/Sold";

// TODO for sale icon: http://stockfresh.com/files/r/rastudio/m/83/5887169_stock-vector-for-sale-sign-thin-line-icon.jpg*/
class WelcomeSections extends React.Component {
  constructor(props) {
    super(props);

    this.quoteSections = [
      {
        title: "”Door in het project te stappen, krijg ik de mogelijkheid om soepel en jong van geest te blijven”",
        href: "/wie-zijn-we#trees",
        text: "Ik woon in het centrum van Tielt, ik woon hier graag maar de formule van cohousen biedt me meer. Het is voor mij belangrijk om in verbinding te staan met mensen, om betrokkenheid, openheid en inspiratie te ervaren. Zeker nu mijn kinderen de deur uit zijn. Ik geniet van het meeleven en samenleven met anderen, jong en oud, met respect voor ieders privéleven. Dat ik de mensen om me heen ken, biedt me een gevoel van geborgenheid.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/t-portret.jpg",
        imageAlt: "Trees"
      },
      {
        title: "“Ik ben zeer benieuwd naar de dynamiek die deze plek kan voortbrengen”",
        href: "/wie-zijn-we#j-en-b",
        text: "Het is een win-win. Een grote tuin, de ongedwongenheid van alles wat je daar kan doen. Als je sociaal wil zijn, dan kan dat, wil je dat niet is dat ook goed. Wil je een groot buurtfeest organiseren? Dat kan, er is plaats genoeg. Wil je werken in de moestuin of heb je zin om eens te koken voor meer personen, dat kan. Ik ben zeer benieuwd naar de dynamiek die deze plek kan voortbrengen.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/j-en-b-portret.jpg",
        imageAlt: "Jonathan en Betty"
      },
      {
        title: "“Wonen in het groen met de stad aan je voordeur“",
        href: "/wie-zijn-we#w-en-e",
        text: "We waren op zoek naar een nieuwe thuis in Tielt. Liefst met wat groen, vlak bij het centrum zodat onze kinderen makkelijk naar school kunnen en we ze niet om de haverklap met de auto ergens heen moeten rijden voor hun hobby’s. Verder hadden we ook nog graag een kwaliteitsvolle, gezonde en energiezuinige woning. Het viel al snel op dat onze verwachtingen ook een financieel kostenplaatje met zich meebracht. Het is dus interessanter kosten te kunnen delen.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/w-en-e-portret.jpg",
        imageAlt: "Wannes en Ellie"
      },
      {
        title: "Frederik, Elke, Maya en Liam kijken er naar uit!",
        href: "/wie-zijn-we#f-en-e",
        text: "Onze verwachting van dit project is dat wonen, rust, gezin, sociale contacten, werk en vrije tijd één geheel vormen. Niet moeten kiezen tussen een rustig gelegen huis buiten de stad met een grote tuin of een huis met het comfort van het centrum van een stad, maar met een kleine tuin. Een plaats waar onze kinderen niet gehinderd zijn door hagen en afsluitingen om met de kinderen van de buren te spelen. Geen zorgen moeten maken over auto’s die voorbijrazen. Geen grote living moeten bouwen die dan nog te klein blijkt te zijn als we een feest geven. Buren hebben die meer zijn dan vriendelijk, mensen die je écht kent, mee afspreekt of iets mee organiseert.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/f-en-e-portret.jpg",
        imageAlt: "Frederik en Elke"
      }
    ];
  }

  render() {
    const QuoteSections = [];
    const { scrollElementName } = this.props;

    this.quoteSections.forEach((quoteSection, index) => {
      QuoteSections.push(
        <TwoColumnSection key={index} href={quoteSection.href}>
          <SectionImage
            imageSource={quoteSection.imageSource}
            imageAlt={quoteSection.imageAlt}
            imageType={IMAGE_TYPES.ROUND}
          />
          <SectionText
            title={quoteSection.title}
            text={quoteSection.text}
            href={quoteSection.href}
            linkText={quoteSection.linkText}
          />
        </TwoColumnSection>
      );
    });

    return (
      <Element name={scrollElementName} className={styles.welcomeSections}>
        <Nieuws />
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
        <TwoColumnSection href="/aanbod" hasAbsoluteDiv={true}>
          <Sold percentageSold={this.props.percentageSold} />
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
        <Carousel interval={10000} random={true}>
          {QuoteSections}
        </Carousel>
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
          <Plannen />
          <SectionText href="/aanbod" linkText="Bekijk de details" />
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
