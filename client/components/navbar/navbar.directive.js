/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html',
      controller: function ($scope, $location, Auth) {
        $scope.isLogin = function () {
          return Auth.isLogin();
        };

        $scope.logout = function () {
          Auth.logout();
        };
      }
    }
  });
