import * as angular from 'angular';
import controller from './layout.controller';

const name = 'layout';
const template = '/client/app/layout/layout.html';

export default angular.module('app.layout', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .name;
