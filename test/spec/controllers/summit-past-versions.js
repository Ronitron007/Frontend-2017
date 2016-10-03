'use strict';

describe('Controller: SummitPastVersionsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SummitPastVersionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummitPastVersionsCtrl = $controller('SummitPastVersionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SummitPastVersionsCtrl.awesomeThings.length).toBe(3);
  });
});
