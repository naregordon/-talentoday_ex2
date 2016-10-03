SprinterApp.factory('sprintersFactory', ['$http', function($http){
    var sprinters = {
        getSprinters: function() {
            var promise = $http.get('data/sprinters.JSON').then(function(response) {
                var sprinters = [];
                var sprinters = response.data
                //Returning the data for the promise
                console.log("--> Sprinters Data <--");
                console.log(sprinters);
                return sprinters;
            });
            //Returns the promise to the controller
            return promise;
        }
    };
    return sprinters;
}]);