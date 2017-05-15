app.service('dbManager_service', function () {
    this.storeDataInLocalStorage = function (obj, key) {
        var dataStr = JSON.stringify(obj);
        localStorage.setItem(key, dataStr);
        return dataStr;
    };
    this.findAvailSeat = function (key) {
        var availSeat = localStorage.getItem(key);
        return availSeat;
    };
});