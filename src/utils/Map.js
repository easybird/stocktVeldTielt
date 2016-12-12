/* eslint-disable no-undef, react/prop-types, no-unused-vars, react/no-find-dom-node */

import React from "react";
import ReactDOM from "react-dom";

class Map extends React.Component {

  // https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 10;
      let lat = 50.9895982;
      let lng = 3.3289063;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    // ...
  }


  render() {
    return (
      <div ref='map' style={{minHeight: '50vh', minWidth: '40vw'}}>
        Loading map...
      </div>
    )
  }
}

Map.propTypes = {};
export default Map;
