import React from "react";
import "./index.css";
import SectionVideo from "../../../components/Content/SectionVideo";
import TwoColumnSection from "../../../components/Content/TwoColumnSection";
import SectionText from "../../../components/Content/SectionText";
import InteractiveImage from "../../../utils/InteractiveImage";

const Plannen = ({ isTeaser }) => (
  <div>
    <h2>Bekijk onze plannen</h2>
    <InteractiveImage isTeaser={isTeaser} />
    <TwoColumnSection>
      <SectionVideo src="https://www.youtube.com/embed/pymC3eSPkI0?autoplay=1&loop=1&playlist=pymC3eSPkI0" />
      <SectionText>
        <div>
          Elke woning behoudt zijn individualiteit. We hebben gewerkt met een drietal type woningen, maar iedere woning heeft toch zijn eigen karakter.
          De breedte en diepte van de woningen verschilt wegens het terrein en er wordt gespeeld met de breedte van de ramen.
          {" "}
          In februari 2018 kiest elke unit individueel de materialen en toestellen waarmee hij wil bouwen. Welke vloeren wil je? Vloerverwarming of radiatoren? Welke badkamermeubels? Welke keuken? De privé tuin kan iedereen achteraf uiteraard ook inrichten naar behoeven.
        </div>
        <div />
      </SectionText>
    </TwoColumnSection>
  </div>
);

Plannen.propTypes = {
  isTeaser: React.PropTypes.boolean
};

export default Plannen;
