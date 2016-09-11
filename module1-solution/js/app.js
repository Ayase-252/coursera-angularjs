(function () {
  angular.module('lunchChecker', [])
    .controller('lunchCheckerController', function ($scope) {
      $scope.lunchList = '';
      $scope.message = '';
      $scope.msgStyle = '';
      $scope.checklunch = function () {
        var parsedList = parseLunchList($scope.lunchList);
        var length = parsedList.length;

        if (parsedList.length === 0) {
          $scope.message = 'Please enter data first.';
          $scope.msgStyle = {
            'color': 'red'
          };
          $scope.inputStyle = {
            'border-color': 'red'
          };
          return;
        }

        $scope.inputStyle = {
          'border-color': 'green'
        };
        $scope.msgStyle = {
          'color': 'green'
        };
        if (length <= 3) {
          $scope.message = 'Enjoy!';

        } else {
          $scope.message = 'Too much!';
        }
      };
    });

  lunchChecker.$inject = ['$scope'];

  function parseLunchList(lunchList) {
    var trimmedLunchList = lunchList.trim();
    var splitedLunchList = trimmedLunchList.split(',');
    var i;
    // Handle empty string

    var result = splitedLunchList.filter(function (element) {
      return element !== '';
    })
    return result;
  }
})();
