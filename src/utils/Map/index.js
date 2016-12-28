/* eslint-disable no-undef, react/prop-types, no-unused-vars, react/no-find-dom-node */

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

class Map extends React.Component {

  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: { lat, lng },
      map: undefined
    }
  }

  // https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  renderChildren() {
    const { children, google } = this.props;
    const { map, currentLocation } = this.state;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map,
        google,
        mapCenter: currentLocation
      });
    });
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google, zoom } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center,
        zoom
      });
      this.setState({ map: new maps.Map(node, mapConfig) });
    }
  }


  render() {
    return (
      <div
        ref='map'
        className={styles.map}
      >
        {this.renderChildren()}
      </div>
    )
  }
}

Map.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object
};

Map.defaultProps = {
  zoom: 10,
  initialCenter: {
    lat: 50.9895982,
    lng: 3.3289063
  }
};

export default Map;
