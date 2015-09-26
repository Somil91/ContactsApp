/**
 * mainAppController
 */

contactManagerApp.controller('contactsListController', ['SyncData', function(SyncData) {

  this.allContacts = [];
  var that = this;
  SyncData.getInitalData('./data/contacts.json')
                    .then(function(data) {
                      console.log('data Found Successfully all Contacts');
                      that.allContacts = data;
                    }, function(error) {
                      console.log('Error Calling frm main ctrl');
                    });

}]);
