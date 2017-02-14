import React from 'react';
import { Link } from 'react-router';
import styles from '../Section/index.css';

const OneColumnSection = ({ href, children, noOverlay }) => {
  const linkOverlay =
    <Link to={href}>
      <span className={styles.emptySpan}></span>
    </Link>;

  return (
    <section className={styles.full}>
      {!noOverlay  && href && linkOverlay}
      {children}
    </section>
  )
};

OneColumnSection.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.element.isRequired,
  noOverlay: React.PropTypes.bool
};

export default OneColumnSection;
