/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .controller('UserpageCtrl', function ($rootScope, $scope, Dialog) {

    $scope.tUser = $.extend({},$rootScope.currentUser);

    $scope.emailAuth = function () {

    };

    $scope.addResume = function () {
      Dialog.infoResume($scope);
    };

    $scope.cancel = function () {
      $scope.tUser = $.extend({},$rootScope.currentUser);
    }
  });
