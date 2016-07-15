app.controller('GitUserSearchController',['GithubSearchFactory', function(GithubSearchFactory) {

  var vm = this;

  vm.doSearch = function() {
    GithubSearchFactory.query(vm.username)
      .then(function(response) {
        vm.result = response.data;
      });
  };
}]);
