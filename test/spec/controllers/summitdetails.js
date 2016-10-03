'use strict';

describe('Controller: SummitdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SummitdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummitdetailsCtrl = $controller('SummitdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SummitdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
