/**
 * Created by youngmoon on 5/14/15.
 */


angular.module('HRApp')
  .factory('Auth', function ($http, $cookieStore) {
    return {
      login: function (user) {

      },

      setToken: function (user) {
        $cookieStore.set
      }
    }
  });
