(function(){
	// Modules
	var app = angular.module('DataGrid', []);

	// Controllers
	
	app.controller('DataGridCnt', ['$scope','$http',function($scope, $http){
		var product = this;
		product.line = [];

		// get data (array JSON)
	 	$http.get("data-json.php").success(function(data){
			product.line = data;
		});

		$scope.sortType     = 'Cod'; 		// set the default sort type
		$scope.sortReverse  = false;  		// set the default sort order
	}]);
})();