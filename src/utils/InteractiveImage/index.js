var React = require("react");
import ImageMapper from "./ImageMapper";
import {
  detailHousesAreas,
  detailPlattegrondAreas,
  detailAppartmentsAreas
} from "./areas";
import SectionText from "../../components/Content/SectionText";
import OneColumnSection from "../../components/Content/OneColumnSection";
import UnitDetailsModal from "./UnitDetailsModal";

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
        <UnitDetailsModal
          isOpen={this.state.modalIsOpen}
          selectedUnit={this.state.selectedUnit}
          onPrevious={() =>
            this.setState({ selectedUnit: this.state.selectedUnit - 1 })}
          onNext={() =>
            this.setState({ selectedUnit: this.state.selectedUnit + 1 })}
          onClose={() => {
            this.setState({ selectedUnit: null, modalIsOpen: false });
          }}
        />
        <div style={{ position: "relative" }}>
          <OneColumnSection noPadding={true}>
            <SectionText>
              <div>
                Er zijn 37 woningen en appartementen beschikbaar in het project. Bekijk hieronder de beschikbare units en hun plannen in detail. De nieuwbouw woningen en de appartementen worden elk in hun eigen rubriek belicht. De groene zijn nog vrij, de rode zijn verkocht, en voor de orangje is er een voorlopige optie hangende.
              </div><br /><div>
                <h4>Nieuwbouw woningen en renovatie duplexen</h4>
                Number 35 tot 37 zijn onze renovatie duplexen. De rest zijn nieuwbouw woningen.
                Wil je graag meer informatie per unit?
                Ga dan met je muis over de unit waarin je geïnteresseerd bent en klik op het bijhorende huisnummer voor gedetailleerde info.
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
