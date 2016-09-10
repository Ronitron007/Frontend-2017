'use strict';

describe('Controller: EventsDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var EventsDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsDetailsCtrl = $controller('EventsDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventsDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
