'use strict';

describe('Controller: WorkshopCategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var WorkshopCategoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkshopCategoriesCtrl = $controller('WorkshopCategoriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkshopCategoriesCtrl.awesomeThings.length).toBe(3);
  });
});
