app.service('rowCalc', function () {
    var rowLetter = [];

    this.rowStack = function (obj) {
        for (var i = 0, j = 65; i < obj.length; i++ , j++) {
            rowLetter.push(String.fromCharCode(j));
        }
        return rowLetter;
    };

});