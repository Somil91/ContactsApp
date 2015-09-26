/**
 * syncData Service
 *
 * To get and post data.
 */

'use strict'

contactManagerApp.factory('SyncData', ['$http', '$q',
    function($http, $q) {

      var syncServiceObject = {
        getInitalData: function(url) {
          var deferred = $q.defer();
          $http.get(url)
            .then(function(response) {
              var allProfiles = response.data;
              deferred.resolve(allProfiles);
            }).catch(function(data) {
              console.log('Error in reading JSON');
              deferred.reject(data);
            });

           return deferred.promise;
        } //getIntialData

      }

      return syncServiceObject;

    }]);
