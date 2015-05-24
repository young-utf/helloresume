/**
 * Created by youngmoon on 5/24/15.
 */

angular.module('HRApp')
  .directive('resumeForm', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/resumeManager/resumeForm/resumeForm.html',
      controller: 'ResumeFormCtrl',
      link: function (scope, el, attr) {
        scope.changeStatus(scope.status);
      }
    }
  });
