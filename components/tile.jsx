import React from 'react';
import * as Minesweeper from './../minesweeper.js';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tile = this.props.tile;
    let display = "";

    if (tile.flagged) {
      display = "F";
    } else if (tile.explored && !tile.bombed) {
      display = tile.adjacentBombCount();
    } else if (tile.explored && tile.bombed) {
      display = "*";
    }

    return (
      <div className="tile">{display}</div>
    );
  }
}

export default Tile;
