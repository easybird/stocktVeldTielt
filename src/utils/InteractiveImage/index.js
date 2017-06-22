var React = require("react");
import ImageMapper from "./ImageMapper";
import areas from "./areas";
import unitInfo from "./unitInfo";
import SectionText from "../../components/Content/SectionText";
import OneColumnSection from "../../components/Content/OneColumnSection";
import Modal from "react-modal";
import ToggleButton from "../../components/ToggleButton";

const WIDTH = 1000;
var MAP = {
  name: "my-map",
  areas
};

var URL = "/assets/img/aanbod/render-detail-houses.png";

class InteractiveImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: MAP,
      colorIndex: 0,
      showAllAreas: true,
      modalIsOpen: false,
      selectedUnit: null
    };
  }

  componentWillReceiveProps() {
    this.setState({ map: { ...MAP } });
  }

  componentDidMount() {
    // setInterval(() => {
    //   const newMap = { ...this.state.map };
    //   if (this.colorIndex === this.colors.length - 1) {
    //     this.colorIndex = 0;
    //   } else {
    //     this.colorIndex = this.colorIndex + 1;
    //   }
    //   newMap.areas[0].fillColor = this.colors[this.colorIndex];
    //
    //   this.setState({ map: newMap });
    // }, 1000);
  }

  colors = ["red", "orange", "yellow"];
  colorIndex = 0;

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={() => {}}
          onRequestClose={() => {}}
          closeTimeoutMS={0}
          style={{ backgroundColor: "white", zIndex: 100 }}
          contentLabel="Modal"
        >
          <div style={{ position: "relative", height: "100%" }}>
            <h2>
              Lot:
              {" "}
              {this.state.selectedUnit && unitInfo[this.state.selectedUnit].lot}
            </h2>
            <h2>
              Type:
              {" "}
              {this.state.selectedUnit &&
                unitInfo[this.state.selectedUnit].type}
            </h2>
            <h2>
              Bewoonbare oppervlakte woning:
              {" "}
              {this.state.selectedUnit &&
                unitInfo[this.state.selectedUnit].squareMeters}
              m<sup>2 </sup>
            </h2>
            <h2>
              Grootte tuin:
              {" "}
              {this.state.selectedUnit &&
                unitInfo[this.state.selectedUnit].gardenSquareMeters}
              m<sup>2 </sup>
            </h2>
            <h2>
              Aantal slaapkamers:
              {" "}
              {this.state.selectedUnit &&
                unitInfo[this.state.selectedUnit].rooms}
            </h2>
            <h2>
              Prijs:
              {" "}
              {this.state.selectedUnit &&
                `€ ${unitInfo[this.state.selectedUnit].price}`}
            </h2>
            <p>Hier komt informatie over dit huis/appartement.</p>
            <div style={{ position: "absolute", right: 0, bottom: 50 }}>
              <ToggleButton
                style={{}}
                onClick={() =>
                  this.setState({ modalIsOpen: !this.state.modalIsOpen })}
              >
                <h2>Sluit</h2>
              </ToggleButton>
            </div>
          </div>
        </Modal>
        <div style={{ position: "relative" }}>
          <OneColumnSection noPadding={true}>
            <SectionText>
              <div>
                Er zijn 37 woningen en appartementen beschikbaar in het project. Waarvan nu ongeveer de helft is verkocht.
              </div><br /><div>
                Wil je graag meer informatie per huis?
                {" "}
                <br />
                {" "}
                Ga dan met je muis over het huis waarin je geïnteresseerd bent en klik op het bijhorende huisnummer om meer info over het huis te zien.
              </div>
              <div />
            </SectionText>
          </OneColumnSection>
          <ImageMapper
            src={URL}
            map={this.state.map}
            width={WIDTH}
            showRaster={false}
            onClick={area => {
              this.setState({
                selectedUnit: area.id,
                modalIsOpen: !this.state.modalIsOpen
              });
            }}
            showAllAreas={this.state.showAllAreas}
            onShowAllAreasChange={() =>
              this.setState({ showAllAreas: !this.state.showAllAreas })}
          />
        </div>
        <div style={{ marginTop: "-70px" }}>
          <OneColumnSection noPadding={true}>
            <SectionText customStyle={{ textAlign: "left" }}>
              <div /><div />
            </SectionText>

          </OneColumnSection>
        </div>
      </div>
    );
  }
}
export default InteractiveImage;
