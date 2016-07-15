describe('GithubSearchController', function() {
  beforeEach(module('GithubSearch'));

  var controller;

  beforeEach(inject(function($controller){
    controller = $controller;
  }));

  it('initialises with an empty search result and term', function() {
    expect(controller.searchResult).toBeUndefined();
    expect(controller.searchTerm).toBeUndefined();
});
});
