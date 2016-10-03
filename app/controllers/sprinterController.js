SprinterApp.controller('sprinterController', ['$scope', '$routeParams', 'sprinterInfoFactory', 'sprinterService', function($scope, $routeParams, sprinterInfoFactory, sprinterService) {
  
  sprinterInfoFactory.getSprinterInfo().then(function(data) {
  	$scope.sprinterInfo = data.sprintersInfo[$routeParams.id - 1];
  });

  $scope.sprinterName = sprinterService.fetchSelectedSprinter().name;

}]);