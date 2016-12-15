import React from 'react';
import { Link } from 'react-router';
import styles from '../Section/index.css';

const TwoColumnSection = ({ href, children }) => {
  const linkOverlay =
    <Link to={href}>
      <span className={styles.emptySpan}></span>
    </Link>;

  const renderedChildren = children.map((child, key) =>
    <div key={key} className={`${styles.col2md} ${styles.center}`}>
      {child}
    </div>
  );

  return (
    <section className={styles.half}>
      {linkOverlay}
      <div className={styles.columns}>
        {renderedChildren}
      </div>
    </section>
  )
};

TwoColumnSection.propTypes = {
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.array.isRequired
};

export default TwoColumnSection;
