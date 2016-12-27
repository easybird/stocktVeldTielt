import React from 'react';
import { IMAGE_TYPES } from '../IMAGE_TYPES';
import styles from './index.css';

const SectionImage = ({ imageType, imageSource, imageAlt }) => (
  <img className={ imageType === IMAGE_TYPES.ROUND ? styles.imgCircle : styles.imgSquare }
       src={imageSource}
       alt={imageAlt}>
  </img>
);

SectionImage.propTypes = {
  imageType: React.PropTypes.string,
  imageSource: React.PropTypes.string.isRequired,
  imageAlt: React.PropTypes.string.isRequired
};

export default SectionImage;
