/**
 * Created by youngmoon on 5/14/15.
 */
angular.module('HRApp')
  .controller('LoginCtrl', function ($scope, Users, Auth) {
    $scope.user = {};

    $scope.submit = function (e) {
      e.preventDefault();
      Users.validLogin($scope.user, function (data) {
        Auth.login(data);
        $location.path('/u/' + $rootScope.currentUser._id);
      }, function (data) {
        alert(data.message);
      });
    };
  });
