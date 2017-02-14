import React from 'react';
require("./index.css");

const ExternalLink = ({ href, text }) => (
  <a href={href} target="_target">{` ${text}`}</a>
);

ExternalLink.propTypes = {
  href: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default ExternalLink;
