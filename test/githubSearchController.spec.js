describe('GithubSearchController', function() {
  beforeEach(module('GithubSearch'));

  var controller;

  beforeEach(inject(function($controller){
    controller = $controller('GithubSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(controller.searchResult).toBeUndefined();
    expect(controller.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {
    var httpBackend, items;

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.github.com/search/users?q=name")
        .respond({ items: items });
    }));

    items = {
      login: "wil0",
      avatar_url: "https://avatars.githubusercontent.com/u/16989462?v=3",
      url: "https://github.com/wil0"
    };

    it('gives back user profile information', function() {
      controller.username = 'name';
      controller.doSearch();
      httpBackend.flush();
      expect(controller.result.items).toEqual(items);
    });
  });
});
