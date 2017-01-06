import React from 'react';
import { Link } from 'react-router';
import sectionStyles from '../Section/index.css';
import styles from './index.css';

const TwoColumnSection = ({ id, href, children, hasHr, sectionStyle = {}, childStyle = {} }) => {
  const linkOverlay = href ?
    <Link to={href}>
      <span className={sectionStyles.emptySpan}></span>
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
      id={id}
      className={styles.half}
      style={ sectionStyle }>
      {linkOverlay}
      <div
        className={styles.columns}
      >
        {renderedChildren}
      </div>
      { hasHr && <hr/>}
    </section>
  )
};

TwoColumnSection.propTypes = {
  id: React.PropTypes.string,
  href: React.PropTypes.string,
  children: React.PropTypes.array.isRequired,
  sectionStyle: React.PropTypes.object,
  childStyle: React.PropTypes.object,
  hasHr: React.PropTypes.bool
};

export default TwoColumnSection;
