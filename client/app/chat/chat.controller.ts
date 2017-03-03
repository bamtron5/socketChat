import * as socketClient from 'socket.io-client';

class ChatController {
  constructor(
    private socket
  ) {
    socket.emit('ping', 'hello');
    socket.on('pong', (msg) => {
      console.log(`Server says ${msg}`);
    });
  }
}

ChatController.$inject = [
  'socket'
];

export default ChatController;
