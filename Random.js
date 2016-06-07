var Random = (function () {
    function Random(seed, min, max, rand_max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 4294967295; }
        if (rand_max === void 0) { rand_max = 4294967295; }
        this.RAND_MAX = 4294967295;
        this.seed_m = seed;
        this.rndNum_m = seed;
        this.min_m = min;
        this.max_m = max;
        this.RAND_MAX = rand_max;
    }
    Random.prototype.generate = function () {
        return Math.random();
    };
    ;
    Random.prototype.uniform = function () {
        var rangeRnd = this.min_m +
            Math.floor((this.max_m - this.min_m + 1.0) *
                this.rndNum_m / (this.RAND_MAX + 1.0));
        return rangeRnd;
    };
    Random.prototype.generates = function (num) {
        var rndStr = "";
        for (var i = 0; i < num; ++i) {
            rndStr += this.generate() + " ";
        }
        return rndStr;
    };
    return Random;
}());
