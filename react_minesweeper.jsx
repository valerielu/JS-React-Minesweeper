import React from 'react';
import ReactDOM from "react-dom";
import Game from "./components/game.jsx";
import Tile from "./components/tile.jsx";
import Board from "./components/board.jsx";


// class MyComponent extends React.Component {
//   constructor() {
//     super();
//   }
//
//   render() {
//     return (
//       <Game />
//     );
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Game />, root);
});
