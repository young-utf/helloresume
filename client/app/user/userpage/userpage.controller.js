/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .controller('UserpageCtrl', function ($rootScope, $scope) {
    console.log($rootScope.currentUser);

    $scope.tUser = $rootScope.currentUser;

  });
