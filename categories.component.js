(function () {
  angular.module('MenuApp')
  .component('categoires', {
    templateUrl: 'categories.template.html',
    bindings: {
      categoriesList: '<'
    }
  })
})();
