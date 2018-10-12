import React, { Component } from 'react';

class JoiningRoomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      game_id: '',
    };

    this.confirmJoin = this.confirmJoin.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setValue(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  confirmJoin() {
    this.props.confirmJoin(this.state);
  }

  render() {
    const { username, game_id } = this.state
    return (
      <div>
        <input name="username" type="text" value={username} onChange={this.setValue} />
        <input name="game_id" type="text" value={game_id} onChange={this.setValue} />
        <button onClick={this.confirmJoin}>Join</button>
      </div>
    );
  }
}

export default JoiningRoomScreen;
