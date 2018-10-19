import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:9000');
function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function newGameCreated(cb) {
  socket.on('newGameCreated', obj => cb(obj));
}

function hostCreateNewGame(cb) {
  socket.on('newGameCreated', obj => cb(obj));
  socket.emit('hostCreateNewGame');
}

function playerJoinGame(obj) {
  socket.emit('playerJoinGame', obj);
}

function playerJoinedRoom(cb) {
  socket.on('playerJoinedRoom', obj => cb(obj));
}

function roomInfo(roomId, cb) {
  socket.emit('roomInfo', roomId);
  socket.on('getRoomInfo', players => cb(players));
}

export {
  subscribeToTimer,
  newGameCreated,
  playerJoinGame,
  playerJoinedRoom,
  roomInfo,
  hostCreateNewGame
};
