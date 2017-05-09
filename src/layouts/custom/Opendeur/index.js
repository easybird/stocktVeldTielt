import React from "react";
import TwoColumnSection from '../../../components/Content/TwoColumnSection';
import SectionText from '../../../components/Content/SectionText';
import SectionImage from '../../../components/Content/SectionImage';

const Opendeur = () => (
  <TwoColumnSection>
    <SectionText
      title="Stocktveld opent zijn deuren"
    >
      <div>Zaterdag 20 mei is het te doen in het klooster. We zetten de deuren van het slotklooster wagewijd open! De ideale gelegenheid om het klooster te bezichtigen en het samenhuisproject beter te leren kennen.
      </div><br/><div>Er is voor elk wat wils. Kinderen kunnen zijn uitleven bij onze 'vijgen na pasen'-eierenraap (14u). Ook kun je ontsnappen uit een 'escape room'.
      Voor wie het graag wat muzikaal heeft, een groep van eigen bodem komt er z'n beste beentje voorzetten: Maïskie Molie (17u). Uiteraard zorgen we ook voor de hongerigen en dorstigen.

    </div>
      <br/>
      <div>Welkom vanaf 11u tot 20u! Tot dan?!
      </div>
    </SectionText>
    <SectionImage imageSource="/assets/img/temp/affiche-opendeur.jpg" imageAlt="Affiche opendeur"/>
  </TwoColumnSection>
);

export default Opendeur;
