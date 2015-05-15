/**
 * Created by youngmoon on 5/15/15.
 */

angular.module('HRApp')
  .config(function ($routeProvider) {
    $routeProvider
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
  }).factory('ResumeService', function ($http, $q) {
    var resume;
    return {
      waitResume: function (type, rId) {
        if (type === 'name') {
          $http.get('/api/resumes')
        } else if (type === 'rId') {

        }
      }
    }
  });
