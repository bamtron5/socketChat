namespace main.socket {
  export class SocketChat {
    constructor(
      private io,
      private socket
    ) {
      this.listen();
    }

    public listen () {
      this.socket.on('TEST CONNECTION', (msg) => {
        this.connected();
      });
    }

    public connected () {
      this.socket.emit('CHAT READY', true);
      this.initChat();
    }

    public initChat () {
      this.socket.on('MESSAGE SERVER', (msg) => {
        this.io.emit('MESSAGE CLIENTS', msg);
      });
    }
  }
}

export = main.socket.SocketChat;
