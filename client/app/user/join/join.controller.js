/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .controller('JoinCtrl', function ($scope, Users) {
    $scope.user = {};

    $scope.submit = function (e) {
      e.preventDefault();
      Users.create($scope.user, function (data) {
        console.log(data);
      });
    };
  });
