(function () {
  angular.module('checklistApp', [])
  .controller('buyListController', buyListController)
  .controller('boughtListController', boughtListController)
  .service('listService', listService);

  buyListController.$inject = ['listService'];
  function buyListController (listService) {
    var buyListCtrl = this;

    buyListCtrl.buyList = listService.getBuyList();
    console.log(buyListCtrl.buyList);
    buyListCtrl.buy = function (index) {
      listService.buy(index);
      console.log(buyListCtrl.buyList);
    };
  }

  boughtListController.$inject = ['listService'];
  function boughtListController(listService) {
    var boughtListCtrl = this;

    boughtListCtrl.boughtList = listService.getBoughtList();
  }

  function listService () {
    var listSer = this;
    listSer.buyList = [{
      name: 'textbooks',
      quantity: 5
    }, {
      name: 'songs',
      quantity: 10
    }, {
      name: 'cookies',
      quantity: 15
    }, {
      name: 'coffee',
      quantity: 3
    }, {
      name: 'pillows',
      quantity: 2
    }];
    listSer.boughtList = [];

    listSer.getBuyList = function () {
      return listSer.buyList;
    };

    listSer.getBoughtList = function () {
      return listSer.boughtList;
    };

    listSer.buy = function (index) {
      // Splice returns an array consisting of deleted elements
      var boughtItem = listSer.buyList.splice(index, 1)[0];
      listSer.boughtList.push(boughtItem)
    };
  }

})();
