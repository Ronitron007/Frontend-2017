'use strict';

describe('Controller: SummitCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SummitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummitCtrl = $controller('SummitCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SummitCtrl.awesomeThings.length).toBe(3);
  });
});
