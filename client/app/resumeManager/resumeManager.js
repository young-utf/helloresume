/**
 * Created by youngmoon on 5/15/15.
 */

angular.module('HRApp')
  .factory('ResumeService', function ($http, $q) {
    var resume;
    return {
      waitResume: function (type, target) {
        var deferred = $q.defer();

        if (type === 'name') {
          //$http.get('/api/resumes')
        } else if (type === 'rId') {
          return $http.get('/api/resumes/id/' + target).success(function (data) {
            resume = data;
            deferred.resolve(data);
          });
        }
      },

      getResume: function () {
        return resume;
      }
    }
  });
