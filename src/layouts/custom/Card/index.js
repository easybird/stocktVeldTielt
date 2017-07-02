/* eslint react/prop-types: 0 */

import React from "react";
import styles from "./index.css";
import SectionImage from "../../../components/Content/SectionImage";

const Card = ({ imageUrl, children, onClick, imageType }) => {
  return (
    <a
      style={onClick && { cursor: "zoom-in" }}
      className={styles.card}
      onClick={onClick}
    >

      <div className={styles.container}>
        <div className={styles.columnText}>{children}</div>
        {imageUrl &&
          <div className={styles.columnImage}>
            <SectionImage
              imageSource={imageUrl}
              alt="Avatar"
              noSectionImage
              imageType={imageType}
            />
          </div>}
      </div>

    </a>
  );
};

export default Card;
