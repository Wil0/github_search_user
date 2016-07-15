angular.module('GithubSearch', [])
       .factory('GithubSearchFactory', ['$http', function($http){

  var queryUrl = 'https://api.github.com/search/users';

  return { query: function(username) {
    return $http ({
      url: queryUrl,
      method: 'GET',
      params: {
                q: username
              }
    });
  }};
}]);
