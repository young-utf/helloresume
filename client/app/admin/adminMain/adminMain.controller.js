/**
 * Created by youngmoon on 5/15/15.
 */

angular.module('HRApp')
  .controller('AdminMainCtrl', function ($rootScope, $scope, $location, Users, Dialog) {

    if ($.isEmptyObject($rootScope.currentUser)) {
      $location.path('/');
    }

    if ($rootScope.currentUser && $rootScope.currentUser.role === 'admin') {
      $scope.adminUser = true;
    }

    Users.get(function (data) {
      console.log(data);
      $scope.userList = data;
    });

    $scope.getDate = function (data) {
      return (new Date(data)).toLocaleString();
    };

    $scope.showResume = function (index) {
      $scope.userIndex = index;
      Dialog.openResumes($scope);
    };

    $scope.addResume = function (index) {
      $scope.userIndex= index;
      Dialog.addResume($scope);
    };
  });
