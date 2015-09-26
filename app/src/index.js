/**
 * Contact App Main Module
 */

'use strict'

var contactManagerApp = angular.module('contactManagerApp', ['ui.bootstrap', 'ui.router']);

contactManagerApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider
          .when('/contact/:id', '/contact/:id')
          .otherwise('/contacts')

      $stateProvider
            .state('contact', {
              url: '/contacts',
              templateUrl: './src/commons/contacts_home.html',
              controller: 'contactsListController',
              controllerAs: 'contacts'
            })
            .state('edit', {
              url: '/contacts/:id',
              templateUrl: './src/contactProfile/profileView.html',
              controller: 'contactProfileController',
              controllerAs: 'profile'
            })
            .state('add', {
              url: '/add',
              templateUrl: './src/contactProfile/profileView.html',
              controller: 'contactProfileController',
              controllerAs: 'profile'
            })
    }
]);
