/* eslint-disable no-undef, react/prop-types, no-unused-vars, react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import cache from './ScriptCache';
import GoogleApi from './GoogleApi';

const defaultMapConfig = {};

export const wrapper = (options) => (WrappedComponent) => {
  const apiKey = options.apiKey;
  const libraries = options.libraries || ['places'];

  class Wrapper extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        loaded: false,
        map: null,
        google: null
      }
    }

    componentDidMount() {
      const refs = this.refs;
      const { zoom, lat, lng } = this.props;

      this.scriptCache.google.onLoad((err, tag) => {
        const maps = window.google.maps;
        const mapRef = refs.map;

        const node = ReactDOM.findDOMNode(mapRef);
        let center = new maps.LatLng(lat, lng);

        let mapConfig = Object.assign({}, defaultMapConfig, {
          center, zoom
        });

        this.map = new maps.Map(node, mapConfig);

        this.setState({
          loaded: true,
          map: this.map,
          google: window.google
        })
      });
    }

    componentWillMount() {
      this.scriptCache = cache({
        google: GoogleApi({
          apiKey: apiKey,
          libraries: libraries
        })
      });
    }

    render() {
      const props = Object.assign({}, this.props, {
        loaded: this.state.loaded,
        map: this.state.map,
        google: this.state.google,
        mapComponent: this.refs.map
      });

      return (
        <div>
          <WrappedComponent {...props} />
          <div ref='map'/>
        </div>
      )
    }
  }

  return Wrapper;
};

export default wrapper;
