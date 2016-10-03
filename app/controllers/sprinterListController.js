SprinterApp.controller('sprinterListController', ['$scope', 'sprintersFactory', 'sprinterService',function($scope, sprintersFactory, sprinterService) {
  
	sprintersFactory.getSprinters().then(function(data) {
		$scope.sprinters = data.sprinters;
	});

	$scope.selectSprinter = function(data) {
		sprinterService.setSelectedSprinter(data);
	}

}]);