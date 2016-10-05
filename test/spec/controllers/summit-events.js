'use strict';

describe('Controller: SummitEventsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SummitEventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummitEventsCtrl = $controller('SummitEventsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SummitEventsCtrl.awesomeThings.length).toBe(3);
  });
});
