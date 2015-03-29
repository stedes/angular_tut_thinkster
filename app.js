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
    });

  $urlRouterProvider.otherwise('home');
}]);



app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){

  $scope.posts = posts.posts;

  $scope.posts=[
    {title:"post1", upvotes:3},
    {title:"post2", upvotes:5}
  ]


  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title   : $scope.title,
      link    : $scope.link,
      upvotes : 0});
    $scope.title = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  }



}]);
