import React from 'react';
import styles from './index.css';
import OneColumnSection from '../OneColumnSection';
import TwoColumnSection from '../TwoColumnSection';
import SectionText from '../SectionText';
import SectionImage from '../SectionImage';
import SectionMap from '../SectionMap';
import { Element } from 'react-scroll';
import { IMAGE_TYPES } from '../IMAGE_TYPES';
import Carousel from '../../../layouts/Carousel';

class WelcomeSections extends React.Component {

  constructor(props) {
    super(props);

    this.quoteSections = [
      {
        title: "”Door in het project te stappen, krijg ik de mogelijkheid om soepel en jong van geest te blijven”",
        href: "/verhalen#trees",
        text: "Ik woon in het centrum van Tielt, ik woon hier graag maar de formule van cohousen biedt me meer. Het is voor mij belangrijk om in verbinding te staan met mensen, om betrokkenheid, openheid en inspiratie te ervaren. Zeker nu mijn kinderen de deur uit zijn. Ik geniet van het meeleven en samenleven met anderen, jong en oud, met respect voor ieders privéleven. Dat ik de mensen om me heen ken, biedt me een gevoel van geborgenheid.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/t-portret.jpg",
        imageAlt: "Whatever picture"
      },
      {
        title: "“Ik ben zeer benieuwd naar de dynamiek deze plek kan voortbrengen”",
        href: "/verhalen#j-en-b",
        text: "Het is een win-win. Een grote tuin, de ongedwongenheid van alles wat je daar kan doen. Als je sociaal wil zijn, dan kan dat, wil je dat niet is dat ook goed. Wil je een groot buurtfeest organiseren? Dat kan, er is plaats genoeg. Wil je werken in de moestuin of heb je zin om eens te koken voor meer personen, dat kan. Ik ben zeer benieuwd naar de dynamiek die deze plek kan voortbrengen.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/j-en-b-portret.jpg",
        imageAlt: "Whatever picture"
      },
      {
        title: "“Wonen in het groen met de stad aan je voordeur“",
        href: "/verhalen#w-en-e",
        text: "We waren op zoek naar een nieuwe thuis in Tielt. Liefst met wat groen, vlak bij het centrum zodat onze kinderen makkelijk naar school kunnen en we ze niet om de haverklap met de auto ergens heen moeten rijden voor hun hobby’s. Verder hadden we ook nog graag een kwaliteitsvolle, gezonde en energiezuinige woning. Het viel al snel op dat onze verwachtingen ook een  nancieel kostenplaatje met zich meebracht. Het is dus interessanter kosten te kunnen delen.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/w-en-e-portret.jpg",
        imageAlt: "Whatever picture"
      }
    ];

  }

  render() {
    const QuoteSections = [];
    const { scrollElementName } = this.props;

    this.quoteSections.forEach((quoteSection, index) => {
      QuoteSections.push(
        <TwoColumnSection key={index} href={quoteSection.href}>
          <SectionImage imageSource={quoteSection.imageSource}
                        imageAlt={quoteSection.imageAlt}
                        imageType={IMAGE_TYPES.ROUND}/>
          <SectionText title={quoteSection.title}
                       text={quoteSection.text}
                       href={quoteSection.href}
                       linkText={quoteSection.linkText}/>
        </TwoColumnSection>
      )
    });

    return (
      <Element name={scrollElementName} className={styles.welcomeSections}>
        <OneColumnSection href="/aanbod">
          <SectionText
            title="Exclusief wonen in het groen met de stad aan je voordeur"
            text="Verborgen achter de historische gevel van het voormalige slotklooster realiseren we het exclusieve project 'Stocktveld'.
      Dit unieke project is een elegant samengaan van energiezuinige nieuwbouw in combinatie met de bewaarde historiciteit van het klooster.
      Het klooster wordt opgeknapt en ten dienste gesteld van alle bewoners.
      De site heeft een bijzonder karakter, met een mooi evenwicht tussen publiek en privé."
            href="/aanbod"
            linkText="Ontdek het aanbod"
          />
        </OneColumnSection>
        <hr/>
        <TwoColumnSection href="/aanbod">
          <SectionText
            title="Uniek klooster met 3 renovatie loften, 20 nieuwbouwwoningen en 14 appartementen"
            text="Met een enorm divers aanbod aan woningen, appartementen en renovatie biedt Stocktveld voor elk wat wils. 40% van onze units zijn al bezet, maar via deze rubriek kom je meer te weten welke nog vrij zijn."
            href="/aanbod"
            linkText="Ontdek het aanbod"
          />
          <SectionImage imageSource="/assets/img/aanbod/intro/schets_zijaanzicht.jpg" imageAlt="Schets klooster"/>
        </TwoColumnSection>
        <hr/>
        <Carousel
          interval={10000}
          random={true}
        >
          {QuoteSections}
        </Carousel>
        <hr/>
        <TwoColumnSection
          href="/locatie"
        >
          <SectionText
            key="locationText"
            title="Bouw mee aan een warme buurt binnen een mooie stad"
            text="Stocktveld is gelegen in het hartje van Tielt, met zijn locatie vlakbij het
            station, met scholen binnen handbereik, is het ideaal gelegen."
            href="/locatie"
            linkText="Bekijk de locatie"
          />
          <SectionMap
            key="locationMap"
          />
        </TwoColumnSection>
      </Element>
    )
  }
}

WelcomeSections.propTypes = {
  scrollElementName: React.PropTypes.string
};

export default WelcomeSections;
