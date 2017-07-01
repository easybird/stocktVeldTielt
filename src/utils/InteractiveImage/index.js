var React = require("react");
import ImageMapper from "./ImageMapper";
import {
  detailHousesAreas,
  detailPlattegrondAreas,
  detailAppartmentsAreas
} from "./areas";
import unitInfo from "./unitInfo";
import SectionText from "../../components/Content/SectionText";
import OneColumnSection from "../../components/Content/OneColumnSection";
import Modal from "react-modal";
import ToggleButton from "../../components/ToggleButton";

const WIDTH = 1000;
const DETAIL_HOUSES_MAP = {
  name: "detailHousesAreas",
  areas: detailHousesAreas
};
const DETAIL_PLATTEGROUND_MAP = {
  name: "detailPlattegrondAreas",
  areas: detailPlattegrondAreas
};
const DETAIL_APPARTMENTS_MAP = {
  name: "detailAppartmentsAreas",
  areas: detailAppartmentsAreas
};

const detailHousesUrl = "/assets/img/aanbod/render-detail-houses.png";
const detailPlattegrondUrl =
  "/assets/img/aanbod/plattegrond_small_gedraaid.png";
const detailAppartmentsUrl = "/assets/img/aanbod/render-detail-appartments.jpg";

class InteractiveImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailHouseMap: DETAIL_HOUSES_MAP,
      detailPlattegrondMap: DETAIL_PLATTEGROUND_MAP,
      detailAppartmentsMap: DETAIL_APPARTMENTS_MAP,
      colorIndex: 0,
      showAllAreas: true,
      modalIsOpen: false,
      selectedUnit: null
    };
  }

  componentWillReceiveProps() {
    this.setState({
      detailHouseMap: { ...DETAIL_HOUSES_MAP },
      detailPlattegrondMap: { ...DETAIL_PLATTEGROUND_MAP },
      detailAppartmentsMap: { ...DETAIL_APPARTMENTS_MAP }
    });
  }

  componentDidMount() {
    // setInterval(() => {
    //   const newMap = { ...this.state.detailHouseMap };
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
                Er zijn 37 woningen en appartementen beschikbaar in het project. Bekijk hieronder de beschikbare units en hun plannen in detail. De nieuwbouw woningen en de appartementen worden elk in hun eigen rubriek belicht.
              </div><br /><div>
                <h4>Nieuwbouw woningen en renovatie duplexen</h4>
                Number 35 tot 37 zijn onze renovatie duplexen. De rest zijn nieuwbouw woningen.
                Wil je graag meer informatie per huis?
                Ga dan met je muis over het huis waarin je geïnteresseerd bent en klik op het bijhorende huisnummer voor gedetailleerde info.
              </div>
              <div />
            </SectionText>
          </OneColumnSection>
          <ImageMapper
            src={detailHousesUrl}
            map={this.state.detailHouseMap}
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
          <OneColumnSection noPadding={true}>
            <SectionText>
              <h4>Appartementen</h4>
              <div>
                Hier vind je hetzelfde overzichtje voor de appartementen als van de woningen. Klik op de huisnummers voor meer info.
              </div>
            </SectionText>
          </OneColumnSection>
          <ImageMapper
            src={detailAppartmentsUrl}
            map={this.state.detailAppartmentsMap}
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
          <OneColumnSection>
            <SectionText>
              <h4>Plattegrond</h4>
              <div>
                Onderstaand zie je nog eens de plattegrond, klik op de huisnummers voor meer info.
              </div>
            </SectionText>
          </OneColumnSection>
          <ImageMapper
            src={detailPlattegrondUrl}
            map={this.state.detailPlattegrondMap}
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

      </div>
    );
  }
}
export default InteractiveImage;
