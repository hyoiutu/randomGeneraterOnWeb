var LFSR = (function () {
    function LFSR(seed) {
        this.seed = seed;
        this.seed_m = seed;
        this.rndNum_m = seed;
    }
    LFSR.prototype.generate = function () {
        var bit;
        bit = (this.rndNum_m & 0x0001) ^
            ((this.rndNum_m & 0x0004) >> 2) ^
            ((this.rndNum_m & 0x0008) >> 3) ^
            ((this.rndNum_m & 0x0020) >> 5);
        this.rndNum_m = (this.rndNum_m >> 1) | (bit << 15);
        return this.rndNum_m;
    };
    return LFSR;
}());
