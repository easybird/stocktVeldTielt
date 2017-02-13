import React from 'react';
import styles from '../Section/index.css';
import Button from '../../Button';

const SectionText = ({ title, text, href, linkText, customStyle, children }) => (
  <div style={customStyle}>
    <h2>{title}</h2>
    {text && <div className={styles.longCopy}>{text}</div>}
    {children && children.map((child) => <div className={styles.longCopy}>{child}</div>)}
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
  text: React.PropTypes.string,
  href: React.PropTypes.string,
  linkText: React.PropTypes.string,
  customStyle: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
};

export default SectionText;
