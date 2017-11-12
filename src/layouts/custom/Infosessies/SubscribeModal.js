/* eslint react/prop-types: 0 */

import React from "react";
import OneColumnSection from "../../../components/Content/OneColumnSection";
import Modal from "react-modal";
import ToggleButton from "../../../components/ToggleButton";
import SectionImage from "../../../components/Content/SectionImage";
import styles from "./index.css";
import { Link } from "react-router";
import InfosessieForm from "../../../components/InfosessieForm";

const date = "maandag 11 december, om 19u30";

export default class SubscribeModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        contentLabel="Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div>
          <SectionImage
            imageSource="/assets/img/aanbod/render_small_banner.jpg"
            imageAlt="timing"
            noSectionImage
          />
          <div className={styles.content}>
            <OneColumnSection noPadding noOverlay noCentered>
              <h4>Infosessie bijwonen?</h4>
              <p>
                Schrijf je vrijblijvend in voor de volgende infosessie op {date}.
              </p>
              <div className={styles.buttons}>
                <InfosessieForm date={date} />
              </div>
            </OneColumnSection>
          </div>
          <div className={styles.buttons}>
            <ToggleButton onClick={this.props.onClose}>
              <h4>Sluit</h4>
            </ToggleButton>
            <Link to="/contact#infosessies">
              <h4>Meer info</h4>
            </Link>
          </div>
        </div>
      </Modal>
    );
  }
}
