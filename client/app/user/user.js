/**
 * Created by youngmoon on 5/14/15.
 */
'use strict';

angular.module('HRApp')
  .config(function ($routeProvider) {
    $routeProvider
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
  });
