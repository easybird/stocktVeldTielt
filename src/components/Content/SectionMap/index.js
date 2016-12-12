/* eslint-disable react/prop-types */

import React from 'react';
import GoogleApiComponent from '../../../utils/GoogleApiComponent';
import Map from '../../../utils/Map';

class SectionMap extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Map google={this.props.google}/>
      </div>
    );

  }
}

SectionMap.propTypes = {};
export default GoogleApiComponent({ apiKey: "AIzaSyCJuqh3NlZan19rNs5ivGbcoOBvBJzqHVw" })(SectionMap);
