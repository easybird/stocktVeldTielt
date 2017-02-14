import React from 'react';
import SectionText from '../../../components/Content/SectionText';
require("./index.css");

const Infosessies = ({ href, linkText }) => (
  <SectionText
    title="Bekijk onze plannen"
    text=""
    href={href}
    linkText={linkText}
  />
);

Infosessies.propTypes = {
  href: React.PropTypes.string,
  linkText: React.PropTypes.string
};

export default Infosessies;
