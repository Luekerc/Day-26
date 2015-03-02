app.controller('LoadingButtonCtrl', function($scope, $timeout) {
	$scope.buttonText = 'Press Me';
	$scope.buttonDisabled = false;
	
	$scope.startLoading=function(){
		$scope.buttonText="Loading...";
		$scope.buttonDisabled=true;
		$timeout(function(){
				$scope.buttonText='Press Me';
				$scope.buttonDisabled=false;
			}, 
			4000
		);
	}

});

