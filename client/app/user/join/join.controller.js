/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .controller('JoinCtrl', function ($rootScope, $scope, $location, Users, Auth) {
    $scope.user = {};

    $scope.submit = function (e) {
      e.preventDefault();
      Users.create($scope.user, function (data) {
        Auth.login(data);
        $location.path('/u/' + $rootScope.currentUser._id);
      });
    };
  });
