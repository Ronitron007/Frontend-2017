'use strict';

describe('Controller: SummitFaqCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SummitFaqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummitFaqCtrl = $controller('SummitFaqCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SummitFaqCtrl.awesomeThings.length).toBe(3);
  });
});
