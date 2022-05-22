(function () {
'use strict';

angular.module('module1', [])
  .controller('ControllerModule1', function($scope) {

    $scope.message = '';
    $scope.lunchInput;

    $scope.readInput = function() {


      if (!$scope.lunchInput || !$scope.lunchInput.length){
        $scope.message = "Enter Data"
      } else {
        let total = $scope.lunchInput.split(',').length;
        if (total > 3) {
          $scope.message = 'Too much!';
        } else {
          $scope.message = 'Enjoy';
        }
      }
    }
  });

})();
