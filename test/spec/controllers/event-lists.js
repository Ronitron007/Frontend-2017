'use strict';

describe('Controller: EventListsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var EventListsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventListsCtrl = $controller('EventListsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventListsCtrl.awesomeThings.length).toBe(3);
  });
});
