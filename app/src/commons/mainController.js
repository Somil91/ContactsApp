/**
 * mainAppController
 */

contactManagerApp.controller('contactsListController', ['$scope', 'SyncData', function($scope, SyncData) {

  var contacts = this;
  contacts.allContacts = [];
  contacts.selectVal = null;
  contacts.availableOptions = [{
    id: '1',
    name: 'Name',
    val: 'name'
  }, {
    id: '2',
    name: 'Telephone',
    val: 'tel'
  }, {
    id: '3',
    name: 'Email',
    val: 'email'
  }];

  SyncData.getInitalData('./data/contacts.json')
        .then(function(data) {
          console.log('data Found Successfully all Contacts');
          contacts.allContacts = data;
        }, function(error) {
          console.log('Error Calling frm main ctrl');
        });

  contacts.deleteContact = function(contactObj) {
    contacts.allContacts = SyncData.deleteContact(contactObj);
  }

  contacts.addToFavorites = function(contactObj) {
    contacts.allContacts = SyncData.addToFavorites(contactObj);
  }

}]);
