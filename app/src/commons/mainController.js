/**
 * mainAppController
 */

contactManagerApp.controller('contactsListController', ['$scope','SyncData', function($scope,SyncData) {

  var contactList = this;
  contactList.allContacts = [];
  SyncData.getInitalData('./data/contacts.json')
                    .then(function(data) {
                      console.log('data Found Successfully all Contacts');
                      contactList.allContacts = data;
                    }, function(error) {
                      console.log('Error Calling frm main ctrl');
                    });

  contactList.deleteContact = function(contactObj){
  	contactList.allContacts = SyncData.deleteContact(contactObj);
  }

  contactList.addToFavorites = function(contactObj){
  	contactList.allContacts = SyncData.addToFavorites(contactObj);
  }

}]);
