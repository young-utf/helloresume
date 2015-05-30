/**
 * Created by youngmoon on 5/15/15.
 */

angular.module('HRApp')
  .controller('ResumeFormCtrl', function ($rootScope, $scope, $timeout, ResumeService) {
    console.log(ResumeService.getResume());
    $scope.r = $.extend({}, ResumeService.getResume());
    var timeout;
    $scope.status = 0;
    $scope.statusList = ['basic', 'education', 'work', 'volunteer', 'awards',
                          'skills', 'language', 'interests', 'publications', 'references'];
    $scope.statusListKor = ['기본', '교육', '경력', '봉사','수상','기술','언어','관심','출판','추천'];



    $.map($scope.statusList, function (stat) {
      if ($scope.r.statusBar[stat].done || !$scope.r.statusBar[stat].have) {
        $scope.status++;
      }
    });

    $scope.statusTo = function (statusTo) {
      $scope.status = statusTo;
      $scope.changeStatus($scope.status);
    };

    $scope.changeStatus = function (statusTo) {
      $('.rf-st-active span').removeClass('rotateIn animated');
      $('.rf-st-active').removeClass('rf-st-active').addClass('rf-st-unactived');
      $($('.rf-status')[statusTo]).addClass('rf-st-active').removeClass('rf-st-unactived');
      $('.rf-st-active span').addClass('rotateIn animated');
      $('.rf-title').addClass('animated fadeIn');

      timeout = $timeout(function () {
        $('.rf-title').removeClass('animated fadeIn');
      }, 500);
    };

    $scope.positioning = function (index) {
      return (5 + (index * 90)) - ($scope.status * 90);
    };

    $scope.minHeight = function () {
      return $('.rf-ct-' + $scope.statusList[$scope.status]).height() + 'px';
    };

    $scope.contentClicked = function (index) {
      if ($scope.status !== index) {
        $scope.statusTo(index);
      }
    };

    $scope.addEduInfo = function () {
      $scope.r.education.push({
        institution: '',
        area: '',
        studyType: '',
        startAt: '',
        endAt: ''
      });
    };
  });
