/**
 * Created by youngmoon on 5/15/15.
 */

angular.module('HRApp')
  .controller('AdminMainCtrl', function ($rootScope, $scope, Users, Dialog) {
    if ($rootScope.currentUser.role === 'admin') {
      $scope.adminUser = true;
    }

    Users.get(function (data) {
      $scope.userList = data;
    });

    $scope.getDate = function (data) {
      return (new Date(data)).toLocaleString();
    };

    $scope.showResume = function (user) {
      $scope.selectedUser = user;
      Dialog.openResumes($scope);
    };

    $scope.addResume = function (user) {
      $scope.selectedUser = user;
      Dialog.addResume($scope);
    };
  });
