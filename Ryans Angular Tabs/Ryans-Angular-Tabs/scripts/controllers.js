// var app = angular.module('app',[]); // defines var app

app.controller('Tabs', ['$scope', function($scope) {
	// $scope.currentTab ='red';
	$scope.changeTab = function(color) {
		// console.log(color);
		$scope.currentTab = color;
	}
}]);

//if the area clicked has the text "Red" in it
//then show the red text.

//if the area clicked has the text "Green" in it

//if the area clicked has the text "Blue" in it

// Hints: Use ng-hide or ng-show to to hide and 
// show your content elements based on whether or 
// not a scope property is equal to the appropriate page. 
// For example: ng-show="currentTab === 'red'", 
// ng-show="currentTab === 'green'", etc.


