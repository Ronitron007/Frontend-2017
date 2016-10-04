'use strict';

describe('Controller: SummitRegistrationsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SummitRegistrationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummitRegistrationsCtrl = $controller('SummitRegistrationsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SummitRegistrationsCtrl.awesomeThings.length).toBe(3);
  });
});
