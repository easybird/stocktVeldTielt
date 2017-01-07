import React from 'react';
import { IMAGE_TYPES } from '../IMAGE_TYPES';
import styles from './index.css';

const SectionImage = ({ imageType, imageSource, imageAlt, imageCaption }) => (
  <div className={styles.sectionImage}>
    <img className={ imageType === IMAGE_TYPES.ROUND ? styles.imgCircle : styles.imgSquare }
         src={imageSource}
         alt={imageAlt}>
    </img>
    {imageCaption && <div className={styles.imgCaption}>{imageCaption}</div>}
  </div>
);

SectionImage.propTypes = {
  imageType: React.PropTypes.string,
  imageSource: React.PropTypes.string.isRequired,
  imageAlt: React.PropTypes.string.isRequired,
  imageCaption: React.PropTypes.string
};

export default SectionImage;
