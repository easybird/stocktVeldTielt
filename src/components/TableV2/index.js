const React = require('react');
const { Table, Column, Cell } = require('fixed-data-table');
import styles from './index.css';

class MyTextCell extends React.Component {
  render() {
    const { rowIndex, field, addendum, data, ...props } = this.props;
    return (
      <Cell className={styles.cell}
        {...props}>
        {`${data[rowIndex][field]} ${addendum ? addendum : ''}`}
      </Cell>
    );
  }
}

MyTextCell.propTypes = {
  rowIndex: React.PropTypes.number.isRequired,
  field: React.PropTypes.string.isRequired,
  addendum: React.PropTypes.string,
  data: React.PropTypes.object.isRequired
};

class MyLinkCell extends React.Component {
  render() {
    const { rowIndex, field, data, ...props } = this.props;
    return (
      <Cell {...props}>
        <a href="http://www.cohousingprojects.be/index.php/tielt/222-beschikbaarheid-tielt-stocktveld"
        target="_blank">
          {data[rowIndex][field]}
        </a>
      </Cell>
    );
  }
}

MyLinkCell.propTypes = {
  rowIndex: React.PropTypes.number.isRequired,
  field: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired
};

export default class TableV2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        { lot: 1, type: 'Woning - halfopen', status: 'Bekijk details', unit: 128 },
        { lot: 2, type: 'Woning - gesloten', status: 'Bekijk details', unit: 111 },
        { lot: 3, type: 'Woning - gesloten', status: 'Bekijk details', unit: 125 },
        { lot: 4, type: 'Woning - gesloten', status: 'Bekijk details', unit: 123 },
        { lot: 5, type: 'Woning - halfopen', status: 'Bekijk details', unit: 127 },
        { lot: 6, type: 'Woning - halfopen', status: 'Bekijk details', unit: 144 },
        { lot: 7, type: 'Woning - gesloten', status: 'TE LAAT', unit: 140 },
        { lot: 8, type: 'Woning - gesloten', status: 'TE LAAT', unit: 134 },
        { lot: 9, type: 'Woning - gesloten', status: 'TE LAAT', unit: 119 },
        { lot: 10, type: 'Woning - gesloten', status: 'TE LAAT', unit: 135 },
        { lot: 11, type: 'Woning - halfopen', status: 'Bekijk details', unit: 115 },
        { lot: 12, type: 'Woning - halfopen', status: 'TE LAAT', unit: 142 },
        { lot: 13, type: 'Woning - halfopen', status: 'Bekijk details', unit: 123 },
        { lot: 14, type: 'Woning - halfopen', status: 'Bekijk details', unit: 126 },
        { lot: 15, type: 'Woning - gesloten', status: 'Bekijk details', unit: 119 },
        { lot: 16, type: 'Woning - gesloten', status: 'Bekijk details', unit: 115 },
        { lot: 17, type: 'Woning - gesloten', status: 'Bekijk details', unit: 115 },
        { lot: 18, type: 'Woning - gesloten', status: 'TE LAAT', unit: 115 },
        { lot: 19, type: 'Woning - gesloten', status: 'TE LAAT', unit: 128 },
        { lot: 20, type: 'Woning - gesloten', status: 'Bekijk details', unit: 136 },
        { lot: 21, type: 'Appartement +0', status: 'TE LAAT', unit: 88 },
        { lot: 22, type: 'Appartement +0', status: 'Bekijk details', unit: 66 },
        { lot: 23, type: 'Appartement +0', status: 'Bekijk details', unit: 60 },
        { lot: 24, type: 'Appartement +0', status: 'Bekijk details', unit: 75 },
        { lot: 25, type: 'Appartement +1', status: 'TE LAAT', unit: 84 },
        { lot: 26, type: 'Appartement +1', status: 'TE LAAT', unit: 79 },
        { lot: 27, type: 'Appartement +1', status: 'Bekijk details', unit: 60 },
        { lot: 28, type: 'Appartement +1', status: 'Bekijk details', unit: 101 },
        { lot: 29, type: 'Appartement +2', status: 'TE LAAT', unit: 90 },
        { lot: 30, type: 'Appartement +2', status: 'TE LAAT', unit: 66 },
        { lot: 31, type: 'Appartement +2', status: 'Bekijk details', unit: 67 },
        { lot: 32, type: 'Appartement +2', status: 'Bekijk details', unit: 102 },
        { lot: 33, type: 'Appartement +2', status: 'Bekijk details', unit: 99 },
        { lot: 34, type: 'Appartement +2', status: 'Bekijk details', unit: 91 },
        { lot: 35, type: 'Duplex +1 & +2', status: 'TE LAAT', unit: 105 },
        { lot: 36, type: 'Duplex +1 & +2', status: 'Bekijk details', unit: 105 },
        { lot: 37, type: 'Duplex +1 & +2', status: 'Bekijk details', unit: 123 },
      ],
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={400}
        height={500}>
        <Column
          header={<Cell>Lot</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="lot"
            />
          }
          width={40}
        />
        <Column
          header={<Cell>Type</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="type"
            />
          }
          width={160}
        />
        <Column
          header={<Cell>Unit</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="unit"
              addendum="&#13217;"
            />
          }
          width={70}
        />
        <Column
          header={<Cell>Status</Cell>}
          cell={
            <MyLinkCell
              data={this.state.myTableData}
              field="status"
            />
          }
          width={130}
        />
      </Table>
    );
  }
}
