(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'home.template.html'
    })

    .state('categories', {
      url: '/categoires',
      templateUrl: 'categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        categoriesList: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/categories/{category}/items',
      templateUrl: 'items.template.html',
      controller:'ItemsController as items',
      resolve: {
        itemsList: ['MenuDataService', '$stateParams',
        function (MenuDataService, $stateParams) {
          var result =  MenuDataService.getItemsForCategory($stateParams.category);
          console.log(result);
          return result;
        }]
      }
    })
  }
})();
