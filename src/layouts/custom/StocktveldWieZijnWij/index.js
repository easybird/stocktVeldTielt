import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import SectionImage from '../../../components/Content/SectionImage';
import SectionText from '../../../components/Content/SectionText';
import SectionStory from '../../../components/Content/SectionStory';
import { IMAGE_TYPES } from '../../../components/Content/IMAGE_TYPES';

class StocktveldPage extends Component {
  constructor(props) {
    super(props);
    const quoteSections = [
      {
        id: "trees",
        title: "”Door in het project te stappen, krijg ik de mogelijkheid om soepel en jong van geest te blijven”",
        href: "/wie-zijn-we#trees",
        paragraphs: [
          {
            title: "Waarom dit project?",
            text: "Ik woon in het centrum van Tielt, ik woon hier graag maar de formule van cohousen biedt me meer. Het is voor mij belangrijk om in verbinding te staan met mensen, om betrokkenheid, openheid en inspiratie te ervaren. Zeker nu mijn kinderen de deur uit zijn. Ik geniet van het meeleven en samenleven met anderen, jong en oud, met respect voor ieders privéleven. Dat ik de mensen om me heen ken, biedt me een gevoel van geborgenheid.",
          },
          {
            text: "Door in het project te stappen, krijg ik de mogelijkheid om soepel en jong van geest te blijven. En, de vijf kleinkinderen kunnen van een speelparadijs genieten! Ik verlaat het centrum van Tielt, maar ik krijg daar een nieuw en uitdagend centrum in de plaats."
          },
          {
            title: "Waarom in Tielt? ",
            text: "Ik ben hier geboren, ik heb hier jaren gewerkt als kleuterleidster en ik ken hier veel mensen. Mijn kinderen en kleinkinderen wonen in de buurt. Ik vind het heel fijn dat een project waar ik al lang van droomde hier in Tielt vorm krijgt."
          }
        ],
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/t-portret.jpg",
        imageAlt: "Trees, 68 jaar"
      },
      {
        id: "j-en-b",
        title: "“Ik ben zeer benieuwd naar de dynamiek die deze plek kan voortbrengen”",
        href: "/wie-zijn-we#j-en-b",
        paragraphs: [
          {
            title: "Waarom Stocktveld?",
            text: "Het is een win-win. Een grote tuin, de ongedwongenheid van alles wat je daar kan doen. Als je sociaal wil zijn, dan kan dat, wil je dat niet is dat ook goed. Wil je een groot buurtfeest organiseren? Dat kan, er is plaats genoeg. Wil je werken in de moestuin of heb je zin om eens te koken voor meer personen, dat kan. Ik ben zeer benieuwd naar de dynamiek die deze plek kan voortbrengen."
          },
          { text: "Betty: We wisten al langer dat we later niet in een villa zouden wonen. We zochten eerst naar een hoeve, maar via vrienden hoorden we over cohousen. Jonathan was zeer benieuwd naar het project in zijn geboortestad Tielt. Na de infosessie waren we allebei erg enthousiast. Al was ik pas echt overtuigd als ik wist dat mijn privacy gerespecteerd zou worden. Alle andere bewoners hebben datzelfde gevoel. Dat heeft mij echt over de streep getrokken. Wat cohousen ook heel interessant maakt, is dat alle leeftijden vertegenwoordigd zijn in het project. Het zal dus een zeer levendige wijk blijven." },
          {
            title: "Waarom in Tielt?",
            text: "Jonathan: Nu wonen we in Gent en we wilden graag terug naar Tielt. Ik ben opgegroeid in Tielt en heel wat van onze vrienden wonen hier. We vinden het ook tof er om onze kinderen later in een groene omgeving te laten opgroeien die veilig is en waar alles aan en bij is."
          }
        ],
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/j-en-b-portret.jpg",
        imageAlt: "Betty (30) en Jonathan (31)"
      },
      {
        id: "w-en-e",
        title: "“Wonen in het groen met de stad aan je voordeur“",
        href: "/wie-zijn-we#w-en-e",
        paragraphs: [
          { text: "We waren op zoek naar een nieuwe thuis in Tielt. Liefst met wat groen, vlak bij het centrum zodat onze kinderen makkelijk naar school kunnen en we ze niet om de haverklap met de auto ergens heen moeten rijden voor hun hobby’s. Verder hadden we ook nog graag een kwaliteitsvolle, gezonde en energiezuinige woning. Het viel al snel op dat onze verwachtingen ook een financieel kostenplaatje met zich meebracht. Het is dus interessanter kosten te kunnen delen." },
          { text: "Tijdens onze zoektocht naar een huis was het niet onmiddellijk onze intentie om te cohousen. Maar een studiereis naar Denemarken voor het werk deed me de voordelen van cohousen al snel inzien. Dankzij cohousen kunnen we onze verwachtingen nu wel waarmaken. Toen ik op de site van het voormalige slotklooster aan de achterzijde van het station stuitte, is de bal onmiddellijk beginnen rollen. " },
          { text: "Ellie: De grote tuin en de mogelijkheid om gemeenschappelijke ruimtes te benutten, bieden zoveel meer mogelijkheden dan een gewoon standaard huis. Heel belangrijk voor ons is dat alles vrijblijvend is. We wonen hier allemaal samen maar blijven onze privacy behouden en worden tot niks verplicht. Onze kinderen hebben een grote tuin om in te spelen en we zullen ook uitkijken op een stukje natuur." },
          { text: "Wonen in het groen met Tielt aan je voordeur. Dat betekent trein, bussen, scholen en winkels op loopafstand. In Tielt heb je alles wat je nodig hebt." }],
        linkText: "Lees het verhaal",
        imageSource: "/assets/img/verhalen/gezinnen/w-en-e-portret.jpg",
        imageAlt: "Ellie (38), Wannes (37) en twee kinderen: Ferre (8) en Fin (6)"
      }
    ];

    this.QuoteSections = quoteSections.map((quoteSection, index) => {
        const image = <SectionImage imageSource={quoteSection.imageSource}
                                    imageAlt={quoteSection.imageAlt}
                                    imageCaption={quoteSection.imageAlt}
                                    imageType={IMAGE_TYPES.ROUND}
        />
        const story = <SectionStory
          title={quoteSection.title}
          paragraphs={quoteSection.paragraphs}/>

        return (
          <TwoColumnSection id={quoteSection.id} key={index} hasHr={true}>
            {index % 2 === 0 ? image : story }
            {index % 2 === 0 ? story : image }
          </TwoColumnSection>
        )
      }
    );
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
          customStyle={{backgroundPosition: "50% 43%"}}
        />
        <NavBar { ...this.props }/>
        <div className={styles.welcomeSections}>
          <TwoColumnSection>
            <SectionText
              title="Wie zijn we"
              text="Stocktveld bestaat momenteel uit een groep van vijftien gezinnen die samen met enkele professionals partners een uniek en kwaliteitsvol woonproject aan het realiseren zijn.
Het doel is samen te leven in een aangename buurt, waar mensen elkaar nog kennen, met het nodige respect voor de eigenheid en privacy van elk individueel gezin.
Deze vorm van samenwonen biedt de ruimte om dingen samen te organiseren, zonder dat dit een verplichting is."
            />
            <SectionImage imageSource="/assets/img/wie-zijn-we/woordwolk.png" imageAlt="Woordwolk"/>
          </TwoColumnSection>
          <hr/>
          { this.QuoteSections }
        </div>
      </div>
    )
  }
}


StocktveldPage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string
};

export default StocktveldPage
