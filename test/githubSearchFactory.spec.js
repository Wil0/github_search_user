describe('GithubSearchFactory', function() {
  beforeEach(module('GithubSearch'));

  var search, httpBackend, items;

  beforeEach(inject(function(GithubSearchFactory, $httpBackend) {
    search = GithubSearchFactory;
    httpBackend = $httpBackend;
    httpBackend
    .when('GET', 'https://api.github.com/search/users?q=name')
    .respond({items: items});
  }));

  items = {
    login: "wil0",
    avatar_url: "https://avatars.githubusercontent.com/u/16989462?v=3",
    url: "https://github.com/wil0"
  };

  it('responds to query', function(){
    expect(search.query()).toBeDefined();
  });

  it('return search results', function() {
    search.query('name')
      .then(function(response) {
        expect(response.data.items).toEqual(items);
      });
    httpBackend.flush();
  });
});
