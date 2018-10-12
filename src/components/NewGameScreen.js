import React, { Component } from 'react';


import { playerJoinedRoom } from '../api/socket';

class NewGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    playerJoinedRoom((obj) => {
      this.setState({ players: [obj] });
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
      </div>
    );
  }
}

export default NewGameScreen;
