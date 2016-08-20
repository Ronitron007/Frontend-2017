'use strict';

describe('Controller: ExhibitionsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var ExhibitionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExhibitionsCtrl = $controller('ExhibitionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExhibitionsCtrl.awesomeThings.length).toBe(3);
  });
});
