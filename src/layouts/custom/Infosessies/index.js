import React from 'react';
import SectionText from '../../../components/Content/SectionText';
import MailTo from '../../../components/MailTo';
require("./index.css");

const Infosessies = ({ href, linkText }) => (
  <SectionText
    title="Welkom op onze infosessies"
    href={href}
    linkText={linkText}
  >
    <div>Op onze infosessies leer je het project ten volle kennen. Je maakt er kennis met de aspecten rond de
      bouw, de prijs, de visie van de huidige bewoners rond het project.
      En dat allemaal door een aantal mensen van de huidige bewoners
    </div><br/>
    <div>De eerstvolgende data waarop je lang kan komen:
      <ul>
        <li><strong>Donderdag 23 februari om 20u</strong></li>
        <li><strong>Zondag 26 maart om 15u</strong></li>
      </ul>
      <br/>
      De infosessie vinden steeds plaats op onze site, in het klooster.
      <ul>
        <li>
          <strong> Blekerijstraat 22,
            Tielt </strong></li>
      </ul>
      <br/>
      Wil je graag meer weten? Of wil je ons laten weten dat je komt?<br/>
      Stuur ons een mailtje: <strong>
        <MailTo emailAddress="stocktveld@gmail.com" text="stocktveld@gmail.com" subject="Interesse%20in%20de%20infosessie"/>
      </strong>
    </div>
  </SectionText>
);

Infosessies.propTypes = {
  href: React.PropTypes.string,
  linkText: React.PropTypes.string
};

export default Infosessies;
