'use strict';

describe('Controller: SpotlightCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SpotlightCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpotlightCtrl = $controller('SpotlightCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpotlightCtrl.awesomeThings.length).toBe(3);
  });
});
