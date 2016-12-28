import React from 'react';
import styles from './styles.css';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

    const max = props.children.length;
    const min = 0;

    this.state = {
      quoteIndex: this.props.random ? Math.floor(Math.random() * (max - min)) + min : 0
    };

    this.setTimer = this.setTimer.bind(this);
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  setTimer() {
    window.clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      let quoteIndex;
      if (this.state.quoteIndex === this.props.children.length - 1) {
        quoteIndex = 0;
      } else {
        quoteIndex = this.state.quoteIndex + 1;
      }
      this.setState({ quoteIndex });
    }, this.props.interval);
  }

  render() {
    const renderedChildren = this.props.children.map(
      (child, index) => <div
        key={index}
        className={`${this.state.quoteIndex == index ? styles.visible : styles.invisible}`}
        style={{
          float: "left",
          marginRight: "-100%",
          width: '100%',
          display: 'block',
          zIndex: `${ this.state.quoteIndex == index ? 2 : 1}`
        }}
      >
        {child}
      </div>
    );

    return (
      <div
        style={{
          position: 'relative',
          height: '100%',
          overflow: 'hidden'
        }}>
        {renderedChildren}
      </div>
    )
  }
}

Carousel.propTypes = {
  children: React.PropTypes.array.isRequired,
  interval: React.PropTypes.number.isRequired,
  random: React.PropTypes.bool
};
export default Carousel;
