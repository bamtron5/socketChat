/// <reference types="socket.io" />

import * as socketClient from 'socket.io-client';

class ChatController {
  public chatStatus = 'OFF';
  public messages = [];
  public msg = '';
  constructor(
    private socket,
    private $http,
    private $scope,
    private toastr
  ) {
    this.listen();
  }

  public listen () {
    this.chatReady();
    this.testConnection();
    this.receiveMessage();
  }

  public testConnection () {
    this.socket.emit('TEST CONNECTION', true);
  }

  public chatReady () {
    this.socket.on('CHAT READY', (status) => {
      console.info('...chat ready');
      this.chatStatus = 'READY';
      this.$scope.$digest();
    });
  }

  public sendMessage () {
    if (this.msg !== '') {
      this.socket.emit('MESSAGE SERVER', this.msg);
    } else {
      this.toastr.warning('THE HELL', 'OMG');
    }
  }

  public receiveMessage () {
    console.info('...waiting to receive messages');
    this.socket.on('MESSAGE CLIENTS', (msg) => {
      this.messages.push(msg);
      this.msg = '';
      this.$scope.$digest();
    });
  }

  // TODO SOCKET FAIL TEST

}

ChatController.$inject = [
  'socket',
  '$http',
  '$scope',
  'toastr'
];

export default ChatController;
