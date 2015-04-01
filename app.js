var app = angular.module('flapperNews', ['ui.router']);


app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){

  $scope.posts = posts.posts;

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title   : $scope.title,
      link    : $scope.link,
      upvotes : 0,
      comments: [
      {author:'John', body:'A good post', upvotes:1},
      {author:'Steven', body:'Learning angular', upvotes:2}
      ]
    });
    $scope.title = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };

  $scope.insertTestData = function(){
    $scope.posts.push({
      title: 'test_post1',
      link: 'http://www.google.be',
      upvotes: 2,
      comments: [
      {author:'Commenter', body:'Nice post', upvotes:5}
      ]
    });
  };

}]);

app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  //console.log('successfully in controller');
  $scope.post = posts.posts[$stateParams.id];

}]);
