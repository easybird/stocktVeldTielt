import React from 'react';
import './index.css';
import TableV2 from '../../../components/TableV2';
import SectionImage from '../../../components/Content/SectionImage';
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import OneColumnSection from '../../../components/Content/OneColumnSection';
import SectionText from '../../../components/Content/SectionText';

const Plannen = () => (
  <div>
    <h2>Bekijk onze plannen</h2>
    <OneColumnSection
      noPadding={true}>
      <SectionText>
        <div>
          Er komen 37 woningen en appartementen beschikbaar in het project. Hieronder vindt u enkele gegevens van de
          woningen en een link naar de prijzen.
        </div>
        <div></div>
      </SectionText>
    </OneColumnSection>
    <TwoColumnSection
      noPadding={true}>
      <TableV2 />
      <SectionImage imageSource="/assets/img/aanbod/plattegrond_small_gedraaid.png" imageAlt="plattegrond"/>
    </TwoColumnSection>
    <OneColumnSection
      noPadding={true}>
      <SectionText>
        <div>
          Verschillende opleveringsmodaliteiten zijn mogelijk: de woning kan zowel kant-en-klaar als casco plus worden
          afgeleverd.
        </div>
        <div></div>
      </SectionText>
    </OneColumnSection>
  </div>
);

Plannen.propTypes = {
  href: React.PropTypes.string,
  linkText: React.PropTypes.string
};

export default Plannen;
