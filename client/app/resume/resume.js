/**
 * Created by youngmoon on 5/15/15.
 */

angular.module('HRApp')
  .factory('ResumeService', function ($http, $q) {
    var resume;
    return {
      waitResume: function (type, rId) {
        if (type === 'name') {
          //$http.get('/api/resumes')
        } else if (type === 'rId') {

        }
      }
    }
  });
