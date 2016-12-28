/* eslint-disable react/prop-types */

import React from 'react';
import GoogleApiComponent from '../../../utils/GoogleApiComponent';
import Map from '../../../utils/Map';
import Marker from '../../../utils/Marker';

class SectionMap extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.loaded) {
      return <div>Google Maps laden...</div>
    }

    return (
      <div style={{ zIndex: 101, position: "relative" }}>
        <Map
          google={this.props.google}
        >
          <Marker/>
        </Map>
      </div>
    );

  }
}

SectionMap.propTypes = {

};

export default GoogleApiComponent({ apiKey: "AIzaSyCJuqh3NlZan19rNs5ivGbcoOBvBJzqHVw" })(SectionMap);
