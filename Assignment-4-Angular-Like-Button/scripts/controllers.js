angular.module('app.controllers', [])
.controller('LikeButtonCtrl', function($scope) {
	$scope.numLikes = 0;

	$scope.addLike = function(){
		$scope.numLikes ++
	}
	$scope.buttonText = $scope.numLikes + " likes";

	if ($scope.numLikes===1){
		$scope.buttonText = $scope.numLikes + ' like';
	}else
		{
			$scope.buttonText;
		}



});


