(function () {
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'items.template.html',
    controller: 'ItemsController as items',
    bindings: {
      itemsList: '<'
    }
  })
})();
