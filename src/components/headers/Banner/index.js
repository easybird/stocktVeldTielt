import React, { Component } from 'react';
import styles from './index.css';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { slide: 0, dragging: null, sliding: false, offset: 0 }; // slide index start from 1
    this.setTimer = this.setTimer.bind(this);
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  setTimer() {
    const interval = this.props.autoplayInteval;
    if (this.props.links.length > 1 && interval && interval > 0) {
      window.clearInterval(this.timer);
      this.timer = window.setInterval(
        this.changeSlide.bind(
          this,
          this.state.slide === this.props.links.length - 1 ? 0 : this.state.slide + 1)
        , interval
      );
    }
  }

  changeSlide(slide) {
    if (document.hidden) return; // run only when page is visible
    if (slide <= this.props.links.length) {
      this.setState({ slide, sliding: true, dragging: null }, this.setTimer);
    }
  }

  render() {
    const { slide } = this.state;

    const li = this.props.links.map(
      (link, index) =>
        <li
          key={index}
          style={{
            backgroundImage: `url(${link})`,
            width: '100%',
            float: 'left',
            marginRight: '-100%',
            position: 'relative',
            display: 'block',
            zIndex: `${ slide == index ? 2 : 1}`
          }}
          className={`${styles.slide} ${slide == index ? styles.visible : styles.invisible}`}>
        </li>
    );

    return (
      <div className={styles.banner}>
        <div className={styles.flexslider}>
          <ul className={styles.slides}>
            {li}
          </ul>
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  links: React.PropTypes.array.isRequired,
  autoplayInteval: React.PropTypes.number.isRequired
};
