import React from 'react';
import { Link } from 'react-router';
import styles from '../Section/index.css';

const OneColumnSection = ({ href, children }) => {
  const linkOverlay =
    <Link to={href}>
      <span className={styles.emptySpan}></span>
    </Link>;

  return (
    <section className={styles.full}>
      {linkOverlay}
      {children}
    </section>
  )
};

OneColumnSection.propTypes = {
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
};

export default OneColumnSection;
