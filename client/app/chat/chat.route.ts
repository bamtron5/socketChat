const route = function route($stateProvider) {
  $stateProvider
    .state('chat', {
      parent: 'main',
      url: '/chat',
      template: '<chat></chat>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
