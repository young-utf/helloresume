/**
 * Created by youngmoon on 5/15/15.
 */

angular.module('HRApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/u/:url', {
        templateUrl: 'app/user/userpage/userpage.html',
        controller: 'UserpageCtrl'
      })
      .when('/join', {
        templateUrl: 'app/user/join/join.html',
        controller: 'JoinCtrl'
      })
      .when('/login', {
        templateUrl: 'app/user/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/:resume', {
        templateUrl: 'app/resume/resumeDetail/resumeDetail.html',
        controller: 'ResumeDetailCtrl',
        resolve: {
          wait: function ($route, ResumeService) {
            if(!$route.current.params) return true;
            ResumeService.waitResume('name', $route.current.params.resume);
          }
        }
      })
      .when('/form/:rId', {
        templateUrl: 'app/resume/resumeForm/simple/simpleForm.html',
        controller: 'ResumeSimpleCtrl'
      })
      .when('/rList', {
        templateUrl: 'app/resume/resumeList/resumeList.html',
        controller: 'ResumeListCtrl'
      });
  });
