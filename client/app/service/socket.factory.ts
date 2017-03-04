import * as io from 'socket.io-client';
import * as angular from 'angular';

export default angular.module('app.factory.socket', [])
  .factory('socket', () => {;
    return io('/');
  })
  .name;
