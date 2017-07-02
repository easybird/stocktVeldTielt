/* eslint react/prop-types: 0 */

import React from "react";
import styles from "./index.css";
import SectionImage from "../../../components/Content/SectionImage";

const Card = ({ imageUrl, children, onClick }) => {
  return (
    <a style={{ cursor: "zoom-in" }} className={styles.card} onClick={onClick}>

      <div className={styles.container}>
        <div className={styles.columnText}>{children}</div>
        {imageUrl &&
          <div className={styles.columnImage}>
            <SectionImage imageSource={imageUrl} alt="Avatar" noSectionImage />
          </div>}
      </div>

    </a>
  );
};

export default Card;
