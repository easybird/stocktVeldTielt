import React from 'react';
import sectionStyles from '../Section/index.css';
import Button from '../../Button';
import styles from './index.css';

const SectionStory = ({ title, paragraphs, href, linkText }) => {
  const longCopy = paragraphs.map((paragraph, index) =>
    <div
      className={styles.paragraph}
      key={index}
    >
      {paragraph.info && <h3 className={styles.info}>{paragraph.info}</h3>}
      {paragraph.title && <h3 className={styles.title}>{paragraph.title}</h3>}
      <div className={sectionStyles.longCopy}>
        {paragraph.text}
      </div>
    </div>
  )

  return (
    <div>
      <h2>{title}</h2>
      {longCopy}
      { href &&
      <Button
        href={href}
        linkText={linkText}
      >
      </Button>}
    </div>
  )
};

SectionStory.propTypes = {
  title: React.PropTypes.string.isRequired,
  paragraphs: React.PropTypes.array.isRequired,
  href: React.PropTypes.string,
  linkText: React.PropTypes.string
};

export default SectionStory;
