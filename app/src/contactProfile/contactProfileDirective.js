/**
 * single Contact DDO
 */

contactManagerApp.directive('contactProfile', function() {
  // Runs during compile
  return {
    scope: false, // {} = isolate, true = child, false/undefined = no change
    controller: 'contactProfileController',
    controllerAs: 'profile',
    templateUrl: './src/contactProfile/contactProfileTemplate.html',
  };
});
