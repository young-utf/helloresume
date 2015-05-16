/**
 * Created by youngmoon on 5/16/15.
 */

angular.module('HRApp')
  .controller('ResumeDialogCtrl', function ($rootScope, $scope) {
    console.log($scope.userList[$scope.userIndex]);
    $scope.selectedUser = $scope.userList[$scope.userIndex];
  });
