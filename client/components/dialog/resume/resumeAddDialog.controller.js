/**
 * Created by youngmoon on 5/17/15.
 */

angular.module('HRApp')
  .controller('ResumeAddDialogCtrl', function ($scope, Resumes, Dialog) {
    $scope.values = [{
      label: 'Simple',
      value: 'simple'
    },{
      label: 'Fancy',
      value: 'fancy'
    },{
      label: 'Portfolio',
      value: 'portfolio'
    }];

    $scope.selectedUser = $scope.userList[$scope.userIndex];

    $scope.submit = function (e) {
      e.preventDefault();
      console.log($scope.selectedUser);
      console.log($scope.selected);
      Resumes.create({
        user: $scope.selectedUser._id,
        sort: $scope.selected,
        paid: true
      }, function (data) {
        console.log(data);
        $scope.userList[$scope.userIndex] = data;
      });
    }
  });
