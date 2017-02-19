import React from 'react';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import SectionImage from '../../../components/Content/SectionImage';
import SectionVideo from '../../../components/Content/SectionVideo';
import SectionText from '../../../components/Content/SectionText';

const Paviljoen = ({noPadding}) => (
  <TwoColumnSection title="Van klooster tot gemeenschappelijk paviljoen" noPadding={noPadding}>
    <SectionVideo
      src="https://www.youtube.com/embed/Umc1SfQOH2E?autoplay=1&loop=1&playlist=Umc1SfQOH2E"
    />
    <SectionText>
      <div style={{ textAlign: "justify", paddingBottom: "30px" }}>
        <div> Het klooster zelf geven we een fraaie opfrisbeurt. We willen hierbij de eigenheid en pracht van het gebouw
          behouden, en zullen dan ook originele elementen behouden. Enkele van de ruimtes in het kloostergebouw zien we
          als gemeenschappelijk: ontmoetingsruimtes, bibliotheek, keuken, wasbar, werkplekken, kinderspeelruimte,
          logeerkamer. Iedereen die hiervan gebruik wenst te maken, kan dit.
        </div>
      </div>
      <SectionImage imageSource="/assets/img/locatie/klooster.jpg"
                    imageAlt="klooster"/>
    </SectionText>
  </TwoColumnSection>
);

Paviljoen.propTypes = {
  noPadding: React.PropTypes.bool
};

export default Paviljoen;
