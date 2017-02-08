import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import SectionMap from '../../../components/Content/SectionMap';
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
