var RandStr = (function () {
    function RandStr() {
        this.randomString = "";
    }
    RandStr.prototype.generate = function (engine) {
        for (var i = 0; i < 100; ++i) {
            this.randomString += engine.generate() % 26 + 'a';
        }
    };
    return RandStr;
}());
