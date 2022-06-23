(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['UserService', 'MenuService'];
  function SignupController (UserService, MenuService) {
    var ctrl = this;

    ctrl.register = function () {
      MenuService.getMenuItems(ctrl.favoriteMenu)
      .then(function (response) {
        if(response){
          UserService.register({
            firstName: ctrl.firstname,
            lastName: ctrl.lastname,
            email: ctrl.email,
            phone: ctrl.phoneNumber,
            favoriteMenu: ctrl.favoriteMenu
          });
          ctrl.isRegistered = true;
          ctrl.isMenuItemNotFound = false;
        }

        else {
          ctrl.isMenuItemNotFound = true;
          ctrl.isRegistered = false;
        }
      })
    }
  }
}());
