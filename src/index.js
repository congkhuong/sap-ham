import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Board from './components/Board';
import './index.css';

import {
  subscribeToTimer, 
  newGameCreated,
  hostCreateNewGame
} from './api/socket';

class Square extends React.Component {

  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}


class Game extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
      gameId: '',
      mySocketId: '',
		};
	}
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
