'use strict';

describe('Controller: SummitSpeakersCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SummitSpeakersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummitSpeakersCtrl = $controller('SummitSpeakersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SummitSpeakersCtrl.awesomeThings.length).toBe(3);
  });
});
