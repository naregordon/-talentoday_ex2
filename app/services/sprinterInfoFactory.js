SprinterApp.factory('sprinterInfoFactory', function ($http) {
    var sprintersInfo = {
        getSprinterInfo: function() {
            var promise = $http.get('data/sprintersinfo.JSON').then(function(response) {
                var sprintersInfo = [];
                var sprintersInfo = response.data
                //Returning the data for the promise
                console.log("--> sprintersInfo Data <--");
                console.log(sprintersInfo);
                return sprintersInfo;
            });
            //Returns the promise to the controller
            return promise;
        }
    };
    return sprintersInfo;
});