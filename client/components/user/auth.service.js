/**
 * Created by youngmoon on 5/14/15.
 */


angular.module('HRApp')
  .factory('Auth', function ($rootScope, $http, $cookieStore, $location) {
    return {
      login: function (user) {
        this.setToken(user);
        this.setCurrentUser(user);
      },

      logout: function () {
        this.removeToken();
        this.removeCurrentUser();
        $location.path('/');
      },

      setToken: function (user) {
        $cookieStore.put('token', user._id);
      },

      setCurrentUser: function (user) {
        $rootScope.currentUser = user;
      },

      getToken: function () {
        return $cookieStore.get('token');
      },

      getCurrentUser: function () {
        return $rootScope.currentUser;
      },

      removeCurrentUser: function () {
        $rootScope.currentUser = null;
      },

      removeToken: function () {
        $cookieStore.remove('token');
      },

      isLogin: function () {
        return !!(this.getToken());
      }
    }
  });
