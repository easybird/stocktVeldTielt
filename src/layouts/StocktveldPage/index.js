import React, { PropTypes, Component } from 'react';
import NavBar from '../../components/headers/NavBar';
import styles from './index.css';
import ThemeHeader from '../../components/headers/ThemeHeader';
import Metadata from '../../components/head/Metadata';
import TwoColumnSection from '../../components/Content/TwoColumnSection';
import SectionImage from '../../components/Content/SectionImage';
import SectionText from '../../components/Content/SectionText';
import { Element } from 'react-scroll';

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
          <Element name="intro">
            <TwoColumnSection>
              <div>
                <SectionText
                  title={this.props.head.pageTitle}
                  text=""
                />
              </div>
              <SectionImage imageSource="/assets/img/aanbod/plattegrond_small.png" imageAlt="plattegrond"/>
            </TwoColumnSection>
          </Element>
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
