import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import OneColumnSection from '../../../components/Content/OneColumnSection';
import SectionMap from '../../../components/Content/SectionMap';
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
            <SectionImage imageSource="/assets/img/locatie/tielt.jpg" imageAlt="stad tielt"/>
          </TwoColumnSection>
          <OneColumnSection>
            <SectionMap
              key="locationMap"
            />
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
