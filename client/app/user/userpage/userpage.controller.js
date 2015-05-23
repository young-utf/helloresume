/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .controller('UserpageCtrl', function ($rootScope, $scope, Dialog) {

    $scope.tUser = $.extend({},$rootScope.currentUser);

    $scope.resumeProcess = function (resume) {
      var type = resume.sort.substring(0, 1).toLocaleUpperCase() + resume.sort.substring(1);
      var process;
      if (resume.process === 'new') {
        process = '새로운';
      } else if (resume.process === 'processing') {
        process = '진행 중인';
      } else if (resume.process === 'done') {
        process = '완성된';
      }
      return '1 개의 ' + process + ' ' + type + ' 이력서를 가지고 계십니다.';
    };

    $scope.resumeProcessBtn = function (resume) {
      var btn;
      if (resume.process === 'new') {
        btn = '작성하기';
      } else if (resume.process === 'processing') {
        btn = '계속하기';
      } else if (resume.process === 'portfolio') {
        btn = '관리하기';
      }
      return btn;
    };

    $scope.emailAuth = function () {

    };

    $scope.addResume = function () {
      Dialog.infoResume($scope);
    };

    $scope.cancel = function () {
      $scope.tUser = $.extend({},$rootScope.currentUser);
    }
  });
