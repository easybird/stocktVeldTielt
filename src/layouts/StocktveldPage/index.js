import React, { PropTypes, Component } from 'react';
import NavBar from '../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../components/headers/ThemeHeader';
import Metadata from '../../components/head/Metadata';
import TwoColumnSection from '../../components/Content/TwoColumnSection';
import SectionImage from '../../components/Content/SectionImage';
import SectionText from '../../components/Content/SectionText';

class StocktveldPage extends Component {
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
        <h2>{this.props.head.pageTitle}</h2>
          <TwoColumnSection>
            <SectionText
              title={this.props.head.pageTitle}
              text="Cohousing Tielt bestaat momenteel uit een groep van vijftien gezinnen die samen een uniek en kwaliteitsvol woonproject willen realiseren.
Het doel is samen te leven in een aangename buurt, waar mensen elkaar nog kennen, met het nodige respect voor de eigenheid en privacy van elk individueel gezin.
Deze vorm van samenwonen biedt de ruimte om dingen samen te organiseren, zonder dat dit een absolute verplichting is."
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
