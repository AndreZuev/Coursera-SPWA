(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
      var toBuyList = this;

      toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

      toBuyList.buyItem = function(itemIndex){
        ShoppingListCheckOffService.buyItem(itemIndex);
      };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService){
      var alreadyBoughtList = this;

      alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService(){
      var service = this;
      var toBuyItems = [
        { name: "cookies", quantity: 10},
        { name: "sushi", quantity: 5},
        { name: "vodka", quantity: 3},
        { name: "cheetos", quantity: 7},
        { name: "waffles", quantity: 6}
      ];
      var alreadyBoughtList = [];

      service.buyItem = function(itemIndex){
          var item = toBuyItems[itemIndex];

          alreadyBoughtList.push(item);
          toBuyItems.splice(itemIndex,1);
      };

      service.getToBuyItems = function(){
          return toBuyItems;
      };

      service.getAlreadyBoughtItems = function(){
          return alreadyBoughtList;
      };
  }



})();
