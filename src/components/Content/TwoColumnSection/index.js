import React from 'react';
import { Link } from 'react-router';
import styles from '../Section/index.css';

const TwoColumnSection = ({ href, children, sectionStyle = {}, childStyle = {} }) => {
  const linkOverlay = href ?
    <Link to={href}>
      <span className={styles.emptySpan}></span>
    </Link> : undefined;

  const renderedChildren = children.map((child, key) =>
    <div
      key={key}
      className={`${styles.col2md} ${styles.center}`}
      style= { childStyle }
    >
      {child}
    </div>
  );

  return (
    <section
      className={styles.half}
      style={ sectionStyle }>
      {linkOverlay}
      <div
        className={styles.columns}
      >
        {renderedChildren}
      </div>
    </section>
  )
};

TwoColumnSection.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.array.isRequired,
  sectionStyle: React.PropTypes.object,
  childStyle: React.PropTypes.object
};

export default TwoColumnSection;
