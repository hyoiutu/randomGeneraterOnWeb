var XorShift = (function () {
    function XorShift(seed) {
        this.seed = seed;
        this.A = 1025;
        this.B = 5;
        this.M = 2048;
        this.RAND_MAX = this.M;
        this.seed_m = seed;
        this.rndNum_m = seed;
    }
    XorShift.prototype.generate = function (min, max) {
        var rangeRnd;
        this.rndNum_m = (this.A * this.rndNum_m + this.B) % this.M;
        rangeRnd = min + Math.floor((max - min + 1.0) * this.rndNum_m / (this.M + 1.0));
        return rangeRnd;
    };
    XorShift.prototype.generates = function (num, min, max) {
        var rndStr = "";
        for (var i = 0; i < num; ++i) {
            rndStr += this.generate(min, max) + " ";
        }
        return rndStr;
    };
    return XorShift;
}());
