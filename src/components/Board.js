import React, { Component } from 'react';

import JoiningRoomScreen from './JoiningRoomScreen';
import NewGameScreen from './NewGameScreen';

import { subscribeToTimer, hostCreateNewGame, newGameCreated, playerJoinGame } from '../api/socket';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJoiningRoom: false,
      isCreateRoom: false,
      playerName: 'Host',
      role: 'host',
      gameId: '',
      mySocketId: '',
    };


    this.joinRoom = this.joinRoom.bind(this);
    this.confirmJoin = this.confirmJoin.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }

  startNewGame() {
    hostCreateNewGame((obj) => {
      this.setState({ ...obj, isCreateRoom: true });
    });
  }
  joinRoom() {
    this.setState({ isJoiningRoom: true })
  }
  confirmJoin(obj) {
    playerJoinGame(obj);
  }

  render() {
    const { isJoiningRoom, isCreateRoom, gameId, mySocketId, role, playerName } = this.state;
    console.log(mySocketId);
    return (
      <div>
        { !isJoiningRoom && !isCreateRoom ? (
          <div>
            <button onClick={this.startNewGame}> Start new game</button>
            <button onClick={this.joinRoom}>Join Room</button>
          </div>
        ): null}
        {isJoiningRoom && (
          <JoiningRoomScreen confirmJoin={this.confirmJoin} />
        )}

        {isCreateRoom ? (
          <NewGameScreen
            gameId={gameId}
            mySocketId={mySocketId}
            role={role}
            playerName={playerName}
          />
        ) : null}
      </div>
    );
  }
}

export default Board;
