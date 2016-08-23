import React from 'react';
import * as Minesweeper from './../minesweeper.js';
import Board from './board.jsx';

class Game extends React.Component {
  constructor() {
    super();
    const board = new Minesweeper.Board(10, 10);
    this.state = {board: board};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
      <div className="board">
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  }
}

export default Game;
