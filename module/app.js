(function(){
	// Modules
	var app = angular.module('DataGrid', []);

	// Controllers
	
	app.controller('DataGridCnt', ['$scope','$http',function($scope, $http){
		var product = this;
		product.line = [];

		// get data (array JSON)
		$sql = "sql=select * from materiales";
	 	$http.get("http://127.0.0.1/DataGrid/php/BBDD-json.php?" + $sql).success(function(data){
			product.line = data;
		});

		$scope.sortType     = 'Cod'; 		// set the default sort type
		$scope.sortReverse  = false;  		// set the default sort order

		// Delete line
		$scope.removeItem = function(index){
		    product.line.splice(index, 1);
		}
	}]);
})();