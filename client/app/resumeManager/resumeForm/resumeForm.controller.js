/**
 * Created by youngmoon on 5/15/15.
 */

angular.module('HRApp')
  .controller('ResumeFormCtrl', function ($rootScope, $scope, ResumeService) {
    $scope.fResume = $.extend({}, ResumeService.getResume());
    console.log($scope.fResume);




  });
