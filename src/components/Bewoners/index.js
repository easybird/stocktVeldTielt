/* eslint react/prop-types: 0 */

import React from "react";
import bewonersInfo from "./bewonersInfo";
import OneColumnSection from "../Content/OneColumnSection";
import SectionText from "../Content/SectionText";
import Card from "../../layouts/custom/Card";
import { IMAGE_TYPES } from "../Content/IMAGE_TYPES";
import SectionImage from "../Content/SectionImage";

const Bewoners = () => {
  const overview = bewonersInfo.map(bewoner => {
    return (
      <Card>
        <SectionText customStyle={{ textAlign: "left", marginBottom: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h4
              style={{
                flex: 4,
                alignSelf: "center",
                marginLeft: "5px",
                marginRight: "5px"
              }}
            >
              {bewoner.name}
            </h4>
            {bewoner.imageUrl &&
              <div style={{ flex: 2 }}>
                <SectionImage
                  imageSource={bewoner.imageUrl}
                  alt="Avatar"
                  noSectionImage
                  imageType={IMAGE_TYPES.ROUND}
                />
              </div>}
          </div>
          <p>{bewoner.interview}</p>
        </SectionText>
      </Card>
    );
  });
  return (
    <div style={{ textAlign: "center" }}>
      <OneColumnSection noCentered>
        <h2>De bewoners aan het woord</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexBasis: "auto",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row"
          }}
        >
          {overview}
        </div>

      </OneColumnSection>
    </div>
  );
};

export default Bewoners;
