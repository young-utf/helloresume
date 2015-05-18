/**
 * Created by youngmoon on 5/14/15.
 */
angular.module('HRApp')
  .controller('LoginCtrl', function ($rootScope, $scope, $location, Users, Auth) {
    $scope.user = {};

    $scope.submit = function (e) {
      e.preventDefault();
      Users.validLogin($scope.user, function (data) {
        Auth.login(data);
        $location.path('/mypage');
      }, function (data) {
        alert(data.message);
      });
    };
  });
