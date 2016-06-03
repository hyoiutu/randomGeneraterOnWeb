var LCG = (function () {
    function LCG(seed) {
        this.seed = seed;
        this.A = 1023;
        this.B = 5;
        this.M = 4294967296;
        this.seed_m = seed;
        this.rndNum_m = seed;
    }
    LCG.prototype.generate = function () {
        this.rndNum_m = (this.A * this.rndNum_m + this.B) % this.M;
        return this.rndNum_m;
    };
    return LCG;
}());
