import React from 'react';
import * as Minesweeper from './../minesweeper.js';
import Tile from './tile.jsx';

class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const rows = this.props.board.grid.map((row, rowIdx) => {
      return (
        <div className="row" key={rowIdx}>
          {row.map((tile, tileIdx) => (
            <Tile tile={tile} className="tile" updateGame={this.props.updateGame} key={rowIdx * this.props.board.gridSize + tileIdx}/>
          ))}
        </div>
      );
    });


    return (
      <div className="board">
        {rows}
      </div>
    );
  }
}

export default Board;
