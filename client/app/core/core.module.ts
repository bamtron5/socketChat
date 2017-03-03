import * as angular from 'angular';
import coreConstants from './core.const';
import 'ngstorage';
import 'angular-resource';
import SocketFactory from '../service/socket.factory';

export default angular.module('app.core', [
  'ngResource',
  'ngStorage',
  coreConstants,
  SocketFactory
])
.name;
