/* eslint react/prop-types: 0 */

import React from "react";
import unitInfo, { unitTypeDescriptions } from "./unitInfo";
import { SOLD } from "./STATUS";
import OneColumnSection from "../../components/Content/OneColumnSection";
import Modal from "react-modal";
import ToggleButton from "../../components/ToggleButton";
import SectionText from "../../components/Content/SectionText";
import SectionImage from "../../components/Content/SectionImage";
import Lightbox from "react-image-lightbox";

export default class UnitDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    let unit;
    let rightColumn;
    let imageSource = "/assets/img/aanbod/verkocht.png";
    if (this.props.selectedUnit) {
      unit = unitInfo[this.props.selectedUnit];
    }

    if (unit) {
      if (unit.status === SOLD) {
        rightColumn = (
          <ToggleButton
            onClick={() => this.setState({ isOpen: imageSource })}
            style={{ cursor: "zoom-in", backgroundColor: "transparent" }}
          >
            <SectionImage imageSource={imageSource} imageAlt="verkocht" />
          </ToggleButton>
        );
      } else {
        if (unit.images) {
          rightColumn = unit.images.map(image => {
            return (
              <div>
                <h4>{image.name}</h4>
                <ToggleButton
                  onClick={() => this.setState({ isOpen: image.path })}
                  style={{ cursor: "zoom-in", backgroundColor: "transparent" }}
                >
                  <SectionImage imageSource={image.path} imageAlt="plannen" />
                </ToggleButton>
              </div>
            );
          });
        } else {
          rightColumn = <h4>Hier kan je binnenkort de plannen bekijken</h4>;
        }
      }
    }

    return (
      <Modal
        isOpen={this.props.isOpen}
        onAfterOpen={() => {}}
        onRequestClose={() => {}}
        closeTimeoutMS={0}
        style={{ backgroundColor: "white", zIndex: 100 }}
        contentLabel="Modal"
      >
        {this.props.selectedUnit && (
          <div style={{ position: "relative", height: "100%" }}>
            <h2>Details unit {unit.lot}</h2>
            <OneColumnSection>
              <SectionText>
                <p>Type: {unit.type}</p>
                <p>
                  Bewoonbare oppervlakte woning: {unit.squareMeters}
                  m<sup>2 </sup>
                </p>
                <p>
                  Grootte tuin: {unit.gardenSquareMeters}
                  m<sup>2 </sup>
                </p>
                <p>Aantal slaapkamers: {unit.rooms}</p>
                {unit.status !== SOLD && <p>Prijs: {unit.price}</p>}
                <br />
                <p>
                  {unit.unitType &&
                    unitTypeDescriptions[unit.unitType] &&
                    unitTypeDescriptions[unit.unitType].description}
                </p>
              </SectionText>
              <br />
              <br />
              <br />
              {rightColumn}
            </OneColumnSection>
          </div>
        )}
        {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.isOpen}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
        {unitInfo[this.props.selectedUnit - 1] && (
          <div style={{ position: "fixed", left: 50, bottom: 50 }}>
            <ToggleButton onClick={this.props.onPrevious}>
              <h4>Vorige unit</h4>
            </ToggleButton>
          </div>
        )}
        {unitInfo[this.props.selectedUnit + 1] && (
          <div style={{ position: "fixed", right: 50, bottom: 50 }}>
            <ToggleButton onClick={this.props.onNext}>
              <h4>Volgende unit</h4>
            </ToggleButton>
          </div>
        )}
        <div style={{ position: "fixed", right: 50, top: 50 }}>
          <ToggleButton onClick={this.props.onClose}>
            <h4>Sluit</h4>
          </ToggleButton>
        </div>
      </Modal>
    );
  }
}
