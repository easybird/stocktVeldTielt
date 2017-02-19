import React from 'react';
import styles from './index.css';

class SectionVideo extends React.Component {

  constructor(props) {
    super(props);
    this.id = Math.random().toString(36).substring(7);
  }

  render() {
    const { src } = this.props;
    return (
      <div className={styles.sectionVideo}>
        <iframe id={this.id} src={src} frameBorder="0" allowFullScreen width="640" height="352"></iframe>
      </div>
    )
  }
}

SectionVideo.propTypes = {
  src: React.PropTypes.string.isRequired,
};

export default SectionVideo;
