var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){

  $scope.posts=[
    {title:"post1", upvotes:3},
    {title:"post2", upvotes:5}
  ]

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  }



}]);
