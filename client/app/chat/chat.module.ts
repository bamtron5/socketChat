import * as angular from 'angular';
import route from './chat.route';
import controller from './chat.controller';

const name = 'chat';
const template = '/client/app/chat/chat.html';

export default angular.module('app.chat', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
