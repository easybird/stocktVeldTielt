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
          Er zijn 37 woningen en appartementen beschikbaar in het project. Waarvan nu ongeveer de helft is verkocht. Hieronder vindt u enkele gegevens van de
          woningen en een link naar de prijzen.
        </div>
        <div></div>
      </SectionText>
    </OneColumnSection>
    <TwoColumnSection>
      <TableV2 />
      <SectionImage imageSource="/assets/img/aanbod/plattegrond_small_gedraaid.png" imageAlt="plattegrond"/>
    </TwoColumnSection>
    <OneColumnSection>
      <SectionText>
        <div>
          De woning kan zowel kant-en-klaar, als casco plus (= wind, water en luchtdicht, inclusief ventilatie en verwarming) worden
          afgeleverd. Nu de bouwaanvraag nog niet is ingediend is er nog steeds flexibiliteit in de vierkante meters per woning. Als je nu instapt kan je met andere woorden nog spelen met het aantal slaapkamers, en de ruimte in je huis. Meer info hierover wordt binnenkort op de website toegevoegd.
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
