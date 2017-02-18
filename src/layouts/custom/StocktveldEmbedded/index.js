import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import OneColumnSection from '../../../components/Content/OneColumnSection';
import SectionText from '../../../components/Content/SectionText';
import styles from './index.css';
import ThemeHeader from '../../../components/headers/ThemeHeader';
import Metadata from '../../../components/head/Metadata';
import Helmet from 'react-helmet';

class StocktveldEmbedded extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.hashLinkScroll();
    window && window.loadFacebook();
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
          height="20vh"
          hero={this.props.head.hero}
          hasLogo={true}
        />
        <NavBar { ...this.props }/>
        <div className={styles.welcomeSections}>
          <OneColumnSection>
            <SectionText
              title="Facebook"
              text="Ziehier onze activiteiten via sociale media. Volg ons op Facebook door op de 'Vind ik leuk'-knop te klikken."
            />
          </OneColumnSection>
          <div id="fb-root"></div>
          <Helmet
            script={ [
              { src: "/assets/js/facebookPagePlugin.js" },
            ] }
          />
          <div className="fb-page"
               data-href="https://www.facebook.com/stocktveld/"
               data-tabs="timeline, events, messages"
               data-width="500"
               data-height="1000"
               data-small-header="false"
               data-adapt-container-width="true"
               data-hide-cover="false"
               data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/stocktveld/" className="fb-xfbml-parse-ignore"><a
              href="https://www.facebook.com/stocktveld/">Stocktveld Cohousing Tielt</a></blockquote>
          </div>
        </div>
      </div>
    )
  }
}


StocktveldEmbedded.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string
};

export default StocktveldEmbedded
