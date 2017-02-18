import React from 'react';
import Helmet from 'react-helmet';
import styles from './index.css';

class GoogleMaps extends React.Component {

  render() {
    return (
      <div style={{ zIndex: 101, position: "relative" }}>
        <div id="map" className={styles.map}></div>
        <Helmet script={[
          {
            src: "/assets/js/googleMaps.js"
          },
          {
            src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJuqh3NlZan19rNs5ivGbcoOBvBJzqHVw&callback=initMap",
            async: true,
            defer: true
          }
        ]}
        />
      </div>
    )
  }
}

GoogleMaps.propTypes = {};
export default GoogleMaps;
