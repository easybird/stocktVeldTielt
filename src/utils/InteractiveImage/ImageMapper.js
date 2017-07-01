/* eslint no-unused-vars: 0 */

//based on https://github.com/coldiary/react-image-mapper
import React, { Component, PropTypes } from "react";
import ToggleButton from "../../components/ToggleButton";

export default class ImageMapper extends Component {
  constructor(props) {
    super(props);
    let absPos = { position: "absolute", top: 0, left: 0 };
    this.styles = {
      container: {
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        width: props.width
      },
      canvas: {
        ...absPos,
        pointerEvents: "none",
        zIndex: 2,
        width: props.width
      },
      img: { ...absPos, zIndex: 1, userSelect: "none", width: props.width }
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.canvas) {
      this.drawAreas(newProps);
    } else {
      this.initCanvas();
    }
  }

  // drawrect(coord) {
  //   console.log("draw rect with", coord);
  //   let [left, top, right, bot] = coord;
  //   const canvasContext = this.getCanvasContext(aria);
  //   canvasContext.strokeRect(left, top, right - left, bot - top);
  //   canvasContext.fillRect(left, top, right - left, bot - top);
  // }

  getCanvasContext(area) {
    const canvasContext = this.canvas.getContext("2d");
    canvasContext.fillStyle = (area && area.fillColor) || this.props.fillColor;
    // canvasContext.strokeStyle = "transparent";
    canvasContext.lineWidth = 0.001;
    // canvasContext.lineWidth = area.strokeColor || this.props.lineWidth;
    return canvasContext;
  }

  clearAll = () => {
    const existingCanvasContext = this.canvas.getContext("2d");
    if (existingCanvasContext) {
      existingCanvasContext.clearRect(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
    }
  };

  drawcircle = area => {
    const canvasContext = this.getCanvasContext(area);

    const areaText = area.id;
    canvasContext.beginPath();
    canvasContext.arc(
      area.coords[0],
      area.coords[1],
      area.coords[2],
      0,
      2 * Math.PI
    );
    canvasContext.closePath();
    canvasContext.stroke();
    canvasContext.fill();
    canvasContext.closePath();
    this.drawText({
      text: areaText,
      textColor: area.textColor,
      coords: area.coords
    });
  };

  drawText = ({ text, textColor, coords, font }) => {
    const canvasContext = this.canvas.getContext("2d");
    canvasContext.fillStyle = textColor || "#000";
    canvasContext.font = "18px Roboto";
    canvasContext.fillText(text, coords[0] - 10, coords[1] + 10);
    canvasContext.strokeStyle = textColor || "#000";
    canvasContext.stroke();
  };

  // drawpoly(area) {
  //   const thisCanvas = this.canvasCtx.get(area.id) || this.ctx;
  //
  //   console.log("draw poly with", area.coords);
  //
  //   coords = area.coords.reduce(
  //     (a, v, i, s) => (i % 2 ? a : [...a, s.slice(i, i + 2)]),
  //     []
  //   );
  //   thisCanvas.beginPath();
  //   let first = coords.unshift();
  //   thisCanvas.moveTo(first[0], first[1]);
  //   coords.forEach(c => thisCanvas.lineTo(c[0], c[1]));
  //   thisCanvas.closePath();
  //   thisCanvas.stroke();
  //   thisCanvas.fill();
  // }

  drawAreas = props => {
    this.clearAll();
    if (props.showAllAreas) {
      props.map.areas.forEach((area, index) => {
        this["draw" + area.shape](area);
      });
    }
  };

  initCanvas = () => {
    if (this.props.width) this.img.width = this.props.width;
    this.canvas.width = this.img.clientWidth;
    this.canvas.height = this.img.clientHeight;
    // this.container.style.width = this.img.clientWidth + "px";
    this.container.style.height = this.img.clientHeight + "px";

    this.drawAreas(this.props);

    if (this.props.onLoad) this.props.onLoad();

    if (this.props.showRaster) {
      this.createRaster();
    }
  };

  createColumn = x => {
    for (var y = 0; y < this.canvas.height; y = y + 25) {
      this.drawcircle({
        id: `${y}`,
        coords: [x, y, 15],
        font: "6px Roboto",
        fillColor: "rgba(255, 255, 255, 0.2)",
        textColor: "black"
      });
    }
  };

  createRaster = () => {
    const raster = [];

    for (var x = 0; x < this.props.width; x = x + 30) {
      this.createColumn(x);
    }
  };

  hoverOn = (area, index, event) => {
    const shape = area.shape;
    if (this.props.active && this["draw" + shape]) {
      this["draw" + shape](area);
    }
    if (this.props.onMouseEnter) this.props.onMouseEnter(area, index, event);
  };

  hoverOff = (area, index, event) => {
    const existingCanvasContext = this.canvas.getContext("2d");

    if (this.props.active && existingCanvasContext) this.drawAreas(this.props);
    if (this.props.onMouseLeave) this.props.onMouseLeave(area, index, event);
  };

  click = (area, index, event) => {
    if (this.props.onClick) {
      event.preventDefault();
      this.props.onClick(area, index, event);
    }
  };

  renderAreas = () => {
    return this.props.map.areas.map((area, index) => (
      <area
        key={area._id || index}
        shape={area.shape}
        coords={area.coords.join(",")}
        onMouseEnter={this.hoverOn.bind(this, area, index)}
        onMouseLeave={this.hoverOff.bind(this, area, index)}
        onClick={this.click.bind(this, area, index)}
        href={area.href}
      />
    ));
  };

  render() {
    return (
      <div style={this.styles.container} ref={node => (this.container = node)}>
        <img
          style={this.styles.img}
          src={this.props.src}
          useMap={`#${this.props.map.name}`}
          alt=""
          ref={node => (this.img = node)}
          onLoad={this.initCanvas}
          onClick={this.props.onImageClick}
        />
        <canvas ref={node => (this.canvas = node)} style={this.styles.canvas} />
        <map name={this.props.map.name}>{this.renderAreas()}</map>
        <ToggleButton
          style={{
            position: "absolute",
            zIndex: 99,
            bottom: 90,
            left: 20
          }}
          onClick={this.props.onShowAllAreasChange}
        >
          {this.props.showAllAreas ? "Verberg info" : "Toon info"}
        </ToggleButton>
      </div>
    );
  }
}

ImageMapper.defaultProps = {
  active: true,
  fillColor: "rgba(255, 255, 255, 0.5)",
  lineWidth: 1,
  map: {
    areas: [],
    name: "image-map-" + Math.random()
  },
  strokeColor: "rgba(0, 0, 0, 0.5)",
  showRaster: false,
  showAllAreas: false
};

ImageMapper.propTypes = {
  active: PropTypes.bool,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  lineWidth: PropTypes.number,
  map: PropTypes.shape({
    areas: PropTypes.arrayOf(
      PropTypes.shape({
        area: PropTypes.shape({
          coords: PropTypes.arrayOf(PropTypes.number),
          href: PropTypes.string,
          shape: PropTypes.string
        })
      })
    ),
    name: PropTypes.string
  }),
  onClick: PropTypes.func,
  onImageClick: PropTypes.func,
  onLoad: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  src: PropTypes.string.isRequired,
  strokeColor: PropTypes.string,
  width: PropTypes.number,
  showRaster: PropTypes.boolean,
  showAllAreas: PropTypes.boolean,
  onShowAllAreasChange: PropTypes.func
};
