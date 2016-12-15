/* eslint-disable react/prop-types */

import React from 'react';
import GoogleApiComponent from '../../../utils/GoogleApiComponent';
import Map from '../../../utils/Map';
import Marker from '../../../utils/Marker';
import InfoWindow from '../../../utils/InfoWindow';

class SectionMap extends React.Component {

  constructor(props) {
    super(props);

    this.onMarkerClick = (props, marker, e) => this._onMarkerClick(props, marker, e);
    this.onMapClick = () => this._onMapClick();
    this.onInfoWindowClose = () => this._onInfoWindowClose();

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  _onMapClick() {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  _onMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  _onInfoWindowClose() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  render() {
    if (!this.props.loaded) {
      return <div>Google Maps laden...</div>
    }

    return (
      <div style={{ zIndex: 100, position: "relative" }}>
        <Map
          google={this.props.google}
          onClick={this.onMapClick}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Stocktveld'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );

  }
}

SectionMap.propTypes = {};
export default GoogleApiComponent({ apiKey: "AIzaSyCJuqh3NlZan19rNs5ivGbcoOBvBJzqHVw" })(SectionMap);
