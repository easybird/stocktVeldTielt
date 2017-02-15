import React from 'react';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import SectionImage from '../../../components/Content/SectionImage';
import SectionText from '../../../components/Content/SectionText';

const Paviljoen = ({noPadding}) => (
  <TwoColumnSection title="Van klooster tot gemeenschappelijk paviljoen" noPadding={noPadding}>
    <SectionImage imageSource="/assets/img/locatie/klooster.jpg"
                  imageAlt="klooster"/>
    <SectionText>
      <div style={{ textAlign: "justify" }}>
        <div> Het klooster zelf geven we een fraaie opfrisbeurt. We willen hierbij de eigenheid en pracht van het gebouw
          behouden, en zullen dan ook originele elementen behouden. Enkele van de ruimtes in het kloostergebouw zien we
          als gemeenschappelijk: ontmoetingsruimtes, bibliotheek, keuken, wasbar, werkplekken, kinderspeelruimte,
          logeerkamer. Iedereen die hiervan gebruik wenst te maken, kan dit.
        </div>
      </div>
      <div></div>
    </SectionText>
  </TwoColumnSection>
);

Paviljoen.propTypes = {
  noPadding: React.PropTypes.bool
};

export default Paviljoen;
