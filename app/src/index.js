/**
 * Contact App Main Module
 */

'use strict'

var contactManagerApp = angular.module('contactManagerApp',['ui.bootstrap', 'ui.router']);

contactManagerApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.
      otherwise('/')

      $stateProvider
            .state('home', {
              url: '/',
              templateUrl: './src/commons/contacts_home.html',
              controller: 'contactsListController',
              controllerAs: 'contacts'
            })
    }
]);
