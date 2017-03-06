import * as angular from 'angular';
import coreConstants from './core.const';
import 'ngstorage';
import 'angular-resource';
import SocketFactory from '../service/socket.factory';
import '../../../node_modules/angular-toastr/dist/angular-toastr.tpls.js';
import '../../../node_modules/angular-toastr/dist/angular-toastr.css';

export default angular.module('app.core', [
  'ngResource',
  'ngStorage',
  'toastr',
  coreConstants,
  SocketFactory
])
.name;
