/**
 * Created by youngmoon on 5/14/15.
 */

angular.module('HRApp')
  .factory('Users', function ($http, Auth) {
    return {
      get: function () {

      },

      create: function (user, cb) {
        console.log(user);
        $http.post('/api/users', user).success(function (data) {
          cb(data);
        });
      }
    }
  });
