/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html',
      controller: function ($scope, Auth, $http) {
        $scope.isLogin = function () {
          return Auth.isLogin();
        };

        $scope.logout = function () {
          Auth.logout();
        };

        $scope.getUserInfo = function () {
          $http.get('/api/users/').success(function (data) {
            console.log(data);
          });
        };
      }
    }
  });
