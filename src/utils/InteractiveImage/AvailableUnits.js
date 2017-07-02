/* eslint react/prop-types: 0 */

import React from "react";
import unitInfo from "./unitInfo";
import { AVAILABLE } from "./STATUS";
import OneColumnSection from "../../components/Content/OneColumnSection";
import SectionText from "../../components/Content/SectionText";
import Card from "../../layouts/custom/Card";

const AvailableUnits = ({ onClick }) => {
  const overview = Object.keys(unitInfo)
    .filter(key => unitInfo[key].status === AVAILABLE)
    .map(key => {
      const unit = unitInfo[key];
      const isWoning = unit.type.indexOf("Woning") !== -1;
      return (
        <Card
          onClick={() => onClick(Number(key))}
          imageUrl={
            isWoning
              ? "/assets/img/logo/apartment-icon.png"
              : "/assets/img/logo/house-icon.png"
          }
        >
          <SectionText
            customStyle={{ textAlign: "left", marginBottom: "30px" }}
          >
            <p>{unit.lot}: {unit.type}</p>
            <p>Slaapkamers: {unit.rooms}</p>
            <p>Bewoonbare opp: {unit.squareMeters} m<sup>2 </sup></p>
            <p>
              {isWoning || unit.type.indexOf("+0") !== -1
                ? "Privétuin:"
                : "Privéterras:"}
              {" "}
              {unit.gardenSquareMeters}
              {" "}
              m
              <sup>2 </sup>
            </p>
          </SectionText>
        </Card>
      );
    });
  return (
    <OneColumnSection noCentered>
      <h2>Overzicht beschikbare units</h2>
      <SectionText customStyle={{ marginBottom: "30px" }}>
        <p>
          Bekijk hier alle nog vrije units, klik op de informatie kaartjes voor meer info.
        </p>
        <div />
      </SectionText>
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
  );
};

export default AvailableUnits;
