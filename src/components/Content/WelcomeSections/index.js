import React from 'react';
import styles from './index.css';
import Section from '../Section';
import { IMAGE_TYPES } from '../IMAGE_TYPES';

class WelcomeSections extends React.Component {

  constructor(props) {
    super(props);

    this.quoteSections = [
      {
        title: "”Door in het project te stappen, krijg ik de mogelijkheid om soepel en jong van geest te blijven”",
        href: "/verhalen",
        text: "Ik woon in het centrum van Tielt, ik woon hier graag maar de formule van cohousen biedt me meer. Het is voor mij belangrijk om in verbinding te staan met mensen, om betrokkenheid, openheid en inspiratie te ervaren. Zeker nu mijn kinderen de deur uit zijn. Ik geniet van het meeleven en samenleven met anderen, jong en oud, met respect voor ieders privéleven. Dat ik de mensen om me heen ken, biedt me een gevoel van geborgenheid.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/t-portret.jpg",
        imageAlt: "Whatever picture"
      },
      {
        title: "“Ik ben zeer benieuwd naar de dynamiek deze plek kan voortbrengen”",
        href: "/verhalen",
        text: "Het is een win-win. Een grote tuin, de ongedwongenheid van alles wat je daar kan doen. Als je sociaal wil zijn, dan kan dat, wil je dat niet is dat ook goed. Wil je een groot buurtfeest organiseren? Dat kan, er is plaats genoeg. Wil je werken in de moestuin of heb je zin om eens te koken voor meer personen, dat kan. Ik ben zeer benieuwd naar de dynamiek die deze plek kan voortbrengen.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/j-en-b-portret.jpg",
        imageAlt: "Whatever picture"
      },
      {
        title: "“Wonen in het groen met de stad aan je voordeur“",
        href: "/verhalen",
        text: "We waren op zoek naar een nieuwe thuis in Tielt. Liefst met wat groen, vlak bij het centrum zodat onze kinderen makkelijk naar school kunnen en we ze niet om de haverklap met de auto ergens heen moeten rijden voor hun hobby’s. Verder hadden we ook nog graag een kwaliteitsvolle, gezonde en energiezuinige woning. Het viel al snel op dat onze verwachtingen ook een  nancieel kostenplaatje met zich meebracht. Het is dus interessanter kosten te kunnen delen.",
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/w-en-e-portret.jpg",
        imageAlt: "Whatever picture"
      }
    ];

    this.state = {
      quoteIndex: Math.round(Math.random(0, this.quoteSections.length - 1))
    };
    this.setTimer = this.setTimer.bind(this);
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  setTimer() {
    window.clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      let quoteIndex;
      if (this.state.quoteIndex === this.quoteSections.length - 1) {
        quoteIndex = 0;
      } else {
        quoteIndex = this.state.quoteIndex + 1;
      }
      this.setState({ quoteIndex });
    }, 5000);
  }

  render() {
    const QuoteSections = [];

    this.quoteSections.forEach((quoteSection, index) => {
      QuoteSections.push(
        <Section
          key={index}
          title={quoteSection.title}
          href={quoteSection.href}
          text={quoteSection.text}
          linkText={quoteSection.linkText}
          imageType={IMAGE_TYPES.ROUND}
          imageSource={quoteSection.imageSource}
          imageAlt={quoteSection.imageAlt}
        />,
      )
    });

    return (
      <div className={styles.welcomeSections}>
        <Section
          key="exlusief"
          title="Exclusief wonen in het groen met de stad aan je voordeur"
          href="/aanbod"
          text="
      Verborgen achter de historische gevel van het voormalige slotklooster realiseren we het exclusieve project 'Stocktveld'.
      Dit unieke project is een elegant samengaan van energiezuinige nieuwbouw in combinatie met de bewaarde historiciteit van het klooster.
      Het klooster wordt opgeknapt en ten dienste gesteld van alle bewoners.
      De site heeft een bijzonder karakter, met een mooi evenwicht tussen publiek en privé.
      "
          linkText="Ontdek het aanbod"
        />
        {QuoteSections[this.state.quoteIndex]}
        <Section
          key="uniek"
          title="Uniek klooster met 3 renovatie loften, 20 nieuwbouwwoningen en 14 appartementen"
          href="/aanbod"
          text="Het is een win-win. Een grote tuin, de ongedwongenheid van alles wat je daar kan doen. Als je sociaal wil zijn, dan kan dat, wil je dat niet is dat ook goed. Wil je een groot buurtfeest organiseren? Dat kan, er is plaats genoeg. Wil je werken in de moestuin of heb je zin om eens te koken voor meer personen, dat kan. Ik ben zeer benieuwd naar de dynamiek die deze plek kan voortbrengen."
          linkText="Ontdek het aanbod"
          imageSource="/assets/img/banner/test_foto_1.jpg"
          imageAlt="Whatever picture"
        />
        <Section
          key="bouw"
          title="Bouw mee aan een warme buurt binnen een mooie stad"
          href="/locatie"
          text="Stocktveld is gelegen in het hartje van Tielt, met zijn locatie vlakbij het
            station, met scholen binnen handbereik, is het ideaal gelegen."
          linkText="Bekijk de locatie"
          imageSource="/assets/img/banner/test_foto_1.jpg"
          imageAlt="Whatever picture"
        />
      </div>
    )
  }
}

export default WelcomeSections;
