SprinterApp.service('sprinterService', function() {

    var selectedSprinter = {};

    // get brand list from brand data
    this.fetchSelectedSprinter = function() {
        return selectedSprinter;
    };

    this.setSelectedSprinter = function(data) {
        selectedSprinter = data;
    };

});