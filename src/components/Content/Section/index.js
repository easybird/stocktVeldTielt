import React from 'react';
import { Link } from 'react-router';
import styles from './index.css';
import { IMAGE_TYPES } from '../IMAGE_TYPES';

const Section = ({ title, href, text, linkText, imageSource, imageAlt, imageType }) => {
  const linkOverlay =
    <Link to={href}>
      <span className={styles.emptySpan}></span>
    </Link>;

  const SectionText = ({ className }) => (
    <div className={className}>
      <h2>{title}</h2>
      <div className={styles.longCopy}>{text}</div>
      <Link className={styles.sectionLink} to={href}>
        {linkText}
      </Link>
    </div>
  );

  SectionText.propTypes = {
    className: React.PropTypes.string
  };

  if (!imageSource) {
    return (
      <section>
        {linkOverlay}
        <SectionText/>
      </section>)
  } else {
    return (
      <section>
        {linkOverlay}
        <div className={styles.columns}>
          <div className={styles.col2md}>
            <img className={ imageType === IMAGE_TYPES.ROUND ? styles.imgCircle : styles.imgSquare } src={imageSource} alt={imageAlt}></img>
          </div>
          <SectionText className={styles.col2md}>
          </SectionText>
        </div>
      </section>)
  }
};

Section.propTypes = {
  title: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  linkText: React.PropTypes.string.isRequired,
  imageSource: React.PropTypes.string,
  imageAlt: React.PropTypes.string,
  imageType: React.PropTypes.string
};

export default Section;

