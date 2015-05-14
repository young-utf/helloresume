/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .factory('Users', function ($http, Auth) {
    return {
      validLogin: function (user, successCB, errorCB) {
        $http.post('/api/users/login', user).success(function (data) {
          successCB(data);
        }).error(function (data) {
          errorCB(data);
        });
      },

      get: function (token, cb) {
        $http.get('/api/users/' + token).success(function (data) {
          cb(data);
        });
      },

      create: function (user, cb) {
        $http.post('/api/users', user).success(function (data) {
          cb(data);
        }).error(function (data) {
          console.log(data);
        });
      }
    }
  });