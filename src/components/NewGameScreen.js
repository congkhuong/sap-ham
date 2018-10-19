import React, { Component } from 'react';


import { playerJoinedRoom, roomInfo } from '../api/socket';

class NewGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    const { gameId } = props;
    playerJoinedRoom((obj) => {
      this.setState((state) => {
        const players = state.players;
        players.push(obj);
        return { players };
      });
    });

    roomInfo(gameId, (players) => {
      this.setState({ players })
    });
  }
  render() {
    const { gameId, mySocketId } = this.props;
    const { players } = this.state;
    console.log(players);
    return (
      <div>
        The game is ready
        <p>Your game ID: { gameId }</p>
        <ul>
          {players.map(function(player, index){
            return <li key={ index }>{player.username}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default NewGameScreen;
