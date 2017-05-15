app.service('priceService', function () {
    this.calc = function (price, hike) {
        var cost = price + price * (hike / 100);
        return cost;
    };
});