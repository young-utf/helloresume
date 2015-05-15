/**
 * Created by youngmoon on 5/15/15.
 */

angular.module('HRApp')
  .controller('AdminMainCtrl', function ($rootScope, $scope, Users) {
    if ($rootScope.currentUser.role === 'admin') {
      $scope.adminUser = true;
    }

    Users.get(function (data) {
      $scope.userList = data;
    });

    $scope.getDate = function (data) {
      return (new Date(data)).toLocaleString();
    }
  });
