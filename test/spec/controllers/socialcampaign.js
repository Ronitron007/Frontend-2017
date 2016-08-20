'use strict';

describe('Controller: SocialcampaignCtrl', function () {

  // load the controller's module
  beforeEach(module('frontend2017App'));

  var SocialcampaignCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocialcampaignCtrl = $controller('SocialcampaignCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SocialcampaignCtrl.awesomeThings.length).toBe(3);
  });
});
