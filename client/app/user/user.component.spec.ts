'use strict';

describe('Component: UserComponent', function() {
  // load the controller's module
  beforeEach(module('cs564WebAppApp.user'));

  var UserComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    UserComponent = $componentController('user', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
