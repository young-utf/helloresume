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
      .when('/join', {
        templateUrl: 'app/user/join/join.html',
        controller: 'JoinCtrl'
      })
      .when('/login', {
        templateUrl: 'app/user/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/rList', {
        templateUrl: 'app/resumeManager/resumeList/resumeList.html',
        controller: 'ResumeListCtrl'
      })
      .when('/admin', {
        templateUrl: 'app/admin/adminMain/adminMain.html',
        controller: 'AdminMainCtrl'
      })
      .when('/:resume', {
        templateUrl: 'app/resumeManager/resumeDetail/resumeDetail.html',
        controller: 'ResumeDetailCtrl',
        resolve: {
          wait: function ($route, ResumeService) {
            if(!$route.current.params) return true;
            ResumeService.waitResume('name', $route.current.params.resume);
          }
        }
      })
      .when('/form/:rId', {
        templateUrl: 'app/resumeManager/resumeForm/simple/simpleForm.html',
        controller: 'ResumeSimpleCtrl'
      })
      .when('/u/:url', {
        templateUrl: 'app/user/userpage/userpage.html',
        controller: 'UserpageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
