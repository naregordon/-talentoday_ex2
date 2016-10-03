SprinterApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'sprinterListController',
        templateUrl: 'app/templates/sprinterList.html'
      }
    ).when('/sprinter/:id', 
      {
        controller: 'sprinterController',
        templateUrl: 'app/templates/sprinter.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});