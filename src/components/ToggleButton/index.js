/* eslint react/prop-types: 0 */

import React from "react";
import styles from "./index.css";

export default class ToggleButton extends React.Component {
  render() {
    return (
      <a
        className={styles.myButton}
        style={this.props.style}
        onClick={() => (this.props.onClick ? this.props.onClick() : {})}
      >
        {this.props.children}
      </a>
    );
  }
}

ToggleButton.propTypes = {};
