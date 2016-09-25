'use strict';

describe('Controller: FellowshipsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var FellowshipsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FellowshipsCtrl = $controller('FellowshipsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FellowshipsCtrl.awesomeThings.length).toBe(3);
  });
});
