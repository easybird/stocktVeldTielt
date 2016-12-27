import React from 'react';
import ReactDOMServer from 'react-dom/server';

class InfoWindow extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.map !== prevProps.map) {
      this.renderInfoWindow();
    }

    if (this.props.children !== prevProps.children) {
      this.updateContent();
    }

    if ((this.props.visible !== prevProps.visible) ||
      (this.props.marker !== prevProps.marker)) {
      this.props.visible ?
        this.openWindow() :
        this.closeWindow();
    }
  }

  openWindow() {
    this.infowindow
      .open(this.props.map, this.props.marker);
  }

  closeWindow() {
    this.infowindow.close();
  }

  updateContent() {
    const content = this.renderChildren();
    this.infowindow.setContent(content);
  }

  renderChildren() {
    const { children } = this.props;
    return ReactDOMServer.renderToString(children);
  }

  renderInfoWindow() {
    let { google } = this.props;

    const iw = this.infowindow = new google.maps.InfoWindow({
      content: ''
    });

    google.maps.event
      .addListener(iw, 'closeclick', this.onClose.bind(this));
    google.maps.event
      .addListener(iw, 'domready', this.onOpen.bind(this));
  }

  onOpen() {
    if (this.props.onOpen) this.props.onOpen();
  }

  onClose() {
    if (this.props.onClose) this.props.onClose();
  }

  render() {
    return null;
  }
}

InfoWindow.propTypes = {
  map: React.PropTypes.object,
  position: React.PropTypes.number,
  google: React.PropTypes.object,
  mapCenter: React.PropTypes.object,
  children: React.PropTypes.object,
  visible: React.PropTypes.bool,
  marker: React.PropTypes.object,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func
};
export default InfoWindow;
