import React, { PropTypes, Component } from "react";
import NavBar from "../../../components/headers/NavBar";
import styles from "./index.css";
import ThemeHeader from "../../../components/headers/ThemeHeader";
import Metadata from "../../../components/head/Metadata";
import TwoColumnSection from "../../../components/Content/TwoColumnSection";
import SectionImage from "../../../components/Content/SectionImage";
import SectionText from "../../../components/Content/SectionText";
import SectionStory from "../../../components/Content/SectionStory";
import { IMAGE_TYPES } from "../../../components/Content/IMAGE_TYPES";
import { quoteSections } from "./quoteSections";

class StocktveldPage extends Component {
  constructor(props) {
    super(props);
    this.QuoteSections = quoteSections.map((quoteSection, index) => {
      const image = (
        <SectionImage
          imageSource={quoteSection.imageSource}
          imageAlt={quoteSection.imageAlt}
          imageCaption={quoteSection.imageAlt}
          imageType={IMAGE_TYPES.ROUND}
        />
      );
      const story = (
        <SectionStory
          title={quoteSection.title}
          paragraphs={quoteSection.paragraphs}
        />
      );

      return (
        <TwoColumnSection id={quoteSection.id} key={index} hasHr={true}>
          {index % 2 === 0 ? image : story}
          {index % 2 === 0 ? story : image}
        </TwoColumnSection>
      );
    });
  }

  componentDidMount() {
    this.hashLinkScroll();
  }

  hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== "") {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element)
          element.scrollIntoView({ block: "start", behavior: "instant" });
      }, 0);
    }
  }

  render() {
    return (
      <div className={styles.stocktveld}>
        <Metadata {...this.props} />
        <ThemeHeader
          height="50vh"
          hero={this.props.head.hero}
          customStyle={{ backgroundPosition: "50% 43%" }}
        />
        <NavBar {...this.props} />
        <div className={styles.welcomeSections}>
          <TwoColumnSection>
            <SectionText
              title="Wie zijn we"
              text="Stocktveld bestaat momenteel uit een groep van vijftien gezinnen die samen met enkele professionals partners een uniek en kwaliteitsvol woonproject aan het realiseren zijn.
Het doel is samen te leven in een aangename buurt, waar mensen elkaar nog kennen, met het nodige respect voor de eigenheid en privacy van elk individueel gezin.
Deze vorm van samenwonen biedt de ruimte om dingen samen te organiseren, zonder dat dit een verplichting is."
            />
            <SectionImage
              imageSource="/assets/img/wie-zijn-we/woordwolk.png"
              imageAlt="Woordwolk"
            />
          </TwoColumnSection>
          <hr />
          {this.QuoteSections}
        </div>
      </div>
    );
  }
}

StocktveldPage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string
};

export default StocktveldPage;
