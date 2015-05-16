/**
 * Created by youngmoon on 5/16/15.
 */

angular.module('HRApp')
  .factory('Resumes', function ($http, Auth) {
    return {
      get: function (cb) {
        $http.get('/api/resumes').success(function (data) {
          cb(data);
        });
      },

      getOne: function (token, cb) {
        $http.get('/api/resumes/').success(function (data) {
          cb(data);
        });
      },

      create: function (body, cb) {
        $http.post('/api/resumes', body).success(function (data) {
          cb(data);
        }).error(function (data) {
          console.log(data);
        });
      }
    }
  });
