import React from 'react';
require("./index.css");

const MailTo = ({ emailAddress, text, subject }) => (
  <a href={`mailto:${emailAddress}?Subject=${subject}`} target="_top">{` ${text}`}</a>
);

MailTo.propTypes = {
  emailAddress: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  subject: React.PropTypes.string
};

export default MailTo;
