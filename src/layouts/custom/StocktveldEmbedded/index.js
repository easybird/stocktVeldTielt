import React, { PropTypes, Component } from 'react';
import NavBar from '../../../components/headers/NavBar';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
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
        <NavBar { ...this.props } />
        <Helmet
          script={ [
            { src: "/assets/js/facebookPagePlugin.js" }, {
              src: "//assets.pinterest.com/js/pinit.js",
              async: true,
              defer: true
            },
          ] }
        />
        <div className={styles.welcomeSections}>
          <TwoColumnSection
            childStyle={{ margin: 0 }}
            noTablets
          >
            <div>
              <SectionText
                title="Facebook"
                text="Ziehier onze activiteiten via sociale media. Volg ons op Facebook door op de 'Vind ik leuk'-knop te klikken."
                customStyle={{ paddingBottom: '5%' }}
              />
              <div id="fb-root"></div>
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
            <div>
              <SectionText
                title="Pinterest"
                text="Bekijk onze boards op Pinterest, met al de ideetjes in verband met ons project."
                customStyle={{ paddingBottom: '5%' }}
              />
              <a
                data-pin-do="embedBoard"
                data-pin-board-width="800"
                data-pin-scale-height="400"
                data-pin-scale-width="200"
                href="https://www.pinterest.com/stocktveld/kloostertuin/">
              </a>
              <a data-pin-do="embedBoard" data-pin-board-width="800" data-pin-scale-height="400"
                 data-pin-scale-width="200" href="https://www.pinterest.com/stocktveld/paviljoen-koken-eten/"></a>
              <a data-pin-do="embedBoard" data-pin-board-width="800" data-pin-scale-height="400"
                 data-pin-scale-width="200" href="https://www.pinterest.com/stocktveld/paviljoen-relax/"></a>
            </div>
          </TwoColumnSection>
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
