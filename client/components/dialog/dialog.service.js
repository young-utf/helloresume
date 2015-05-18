/**
 * Created by youngmoon on 5/16/15.
 */

angular.module('HRApp')
  .factory('Dialog', function ($rootScope, ngDialog) {
    return {
      openResumes: function (scope) {
        ngDialog.open({
          template: 'components/dialog/resume/resumeDialog.html',
          className: 'resumeDialogWrap ngdialog-theme-default',
          controller: 'ResumeDialogCtrl',
          scope: scope
        });
      },

      addResume: function (scope) {
        ngDialog.open({
          template: 'components/dialog/resume/resumeAddDialog.html',
          className: 'resumeAddDialogWrap ngdialog-theme-default',
          controller: 'ResumeAddDialogCtrl',
          scope: scope
        });
      },

      infoResume: function (scope) {
        ngDialog.open({
          template: 'components/dialog/resume/resumeInfoDialog.html',
          className: 'resumeInfoDialogWrap ngdialog-theme-default',
          controller: 'ResumeInfoDialogCtrl',
          scope: scope
        });
      }
    }
  });
