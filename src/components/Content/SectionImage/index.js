import React from "react";
import { IMAGE_TYPES } from "../IMAGE_TYPES";
import styles from "./index.css";

const SectionImage = ({
  imageType,
  imageSource,
  imageAlt,
  imageCaption,
  noSectionImage
}) => (
  <div className={!noSectionImage && styles.sectionImage}>
    <img
      className={
        imageType === IMAGE_TYPES.ROUND ? styles.imgCircle : styles.imgSquare
      }
      src={imageSource}
      alt={imageAlt}
    />
    {imageCaption && <div className={styles.imgCaption}>{imageCaption}</div>}
  </div>
);

SectionImage.propTypes = {
  imageType: React.PropTypes.string,
  imageSource: React.PropTypes.string.isRequired,
  imageAlt: React.PropTypes.string.isRequired,
  imageCaption: React.PropTypes.string,
  noSectionImage: React.PropTypes.bool
};

export default SectionImage;
