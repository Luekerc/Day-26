app.controller('LikeButtonCtrl', function($scope) {
	$scope.numLikes = 0;

	$scope.addLike = function(){
		$scope.numLikes ++
	}

});


