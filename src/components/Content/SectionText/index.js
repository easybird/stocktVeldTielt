import React from 'react';
import styles from '../Section/index.css';
import { Link } from 'react-router';

const SectionText = ({ title, text, href, linkText }) => (
  <div>
    <h2>{title}</h2>
    <div className={styles.longCopy}>{text}</div>
    { href &&
    <Link className={styles.sectionLink} to={href}>
      {linkText}
    </Link>}
  </div>
);

SectionText.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  href: React.PropTypes.string,
  linkText: React.PropTypes.string
};

export default SectionText;
