'use strict';

describe('Controller: SummitPartnersCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SummitPartnersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummitPartnersCtrl = $controller('SummitPartnersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SummitPartnersCtrl.awesomeThings.length).toBe(3);
  });
});
