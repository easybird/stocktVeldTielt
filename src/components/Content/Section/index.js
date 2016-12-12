import React from 'react';
import { Link } from 'react-router';
import styles from './index.css';
import SectionText from '../SectionText';
import SectionImage from '../SectionImage';

const Section = ({ title, href, text, linkText, imageSource, imageAlt, imageType, imageFirst }) => {
  const linkOverlay =
    <Link to={href}>
      <span className={styles.emptySpan}></span>
    </Link>;

  if (!imageSource) {
    return (
      <section className={styles.full}>
        {linkOverlay}
        <SectionText
          title={title}
          text={text}
          linkText={linkText}
          href={href}
        />
      </section>)
  } else {
    const image =
      <SectionImage imageType={imageType} imageSource={imageSource} imageAlt={imageAlt}/>;

    const sectionText =
      <SectionText
        className={`${styles.col2md} ${styles.center}`}
        title={title}
        text={text}
        linkText={linkText}
        href={href}
      />;

    return (
      <section className={styles.half}>
        {linkOverlay}
        <div className={styles.columns}>
          {imageFirst ? image : sectionText}
          {imageFirst ? sectionText : image}
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
  imageType: React.PropTypes.string,
  imageFirst: React.PropTypes.bool
};

export default Section;

