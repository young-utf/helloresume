/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .controller('JoinCtrl', function ($scope, Users, Auth) {
    $scope.user = {};

    $scope.submit = function (e) {
      e.preventDefault();
      Users.create($scope.user, function (data) {
        Auth.login(data);
      });
    };
  });
