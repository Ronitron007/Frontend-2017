'use strict';

describe('Controller: HospitalityCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var HospitalityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HospitalityCtrl = $controller('HospitalityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HospitalityCtrl.awesomeThings.length).toBe(3);
  });
});
