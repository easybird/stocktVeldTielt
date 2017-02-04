import React from 'react';
import styles from '../Section/index.css';
import Button from '../../Button';

const SectionText = ({ title, text, href, linkText, customStyle }) => (
  <div style={customStyle}>
    <h2>{title}</h2>
    <div className={styles.longCopy}>{text}</div>
    { href &&
    <Button
      style={{marginTop: "40px"}}
      linkText={linkText}
      href={href}
    />
    }
  </div>
);

SectionText.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  href: React.PropTypes.string,
  linkText: React.PropTypes.string,
  customStyle: React.PropTypes.object
};

export default SectionText;
