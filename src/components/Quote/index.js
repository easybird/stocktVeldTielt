import React from "react";
import './index.css';

const Quote = ({text}) => (
<blockquote>{`${text}`}</blockquote>
);

Quote.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Quote;
