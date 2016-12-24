import React from 'react';
import styles from './styles.css';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quoteIndex: Math.round(Math.random(0, props.children.length - 1))
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
    }, 5000);
  }

  render() {
    const renderedChildren = this.props.children.map((child, index) => {
      return <div
        key={index}
        className={`${this.state.quoteIndex == index ? styles.visible : styles.invisible}`}
        style={ index !== this.state.quoteIndex ? { position: 'absolute', top: 0 } : {}}
      >
        {child}
      </div>
    });

    return (
      <div
        style={{
          position: 'relative',
          height: '100%'
        }}>
        {renderedChildren}
      </div>
    )
  }
}

Carousel.propTypes = {
  children: React.PropTypes.array.isRequired
};
export default Carousel;
