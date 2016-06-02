var LFSR = (function () {
    function LFSR(seed) {
        this.seed = seed;
        this.seed_m = seed;
        this.rndNum_m = seed;
    }
    LFSR.prototype.generate = function () {
        var bit;
        bit = (this.rndNum_m & 0x00000001) ^
            ((this.rndNum_m & 0x00000002) >> 1) ^
            ((this.rndNum_m & 0x20000000) >> 21) ^
            ((this.rndNum_m & 0x80000000) >> 31);
        this.rndNum_m = (this.rndNum_m >> 1) | (this.rndNum_m << 31);
        return this.rndNum_m;
    };
    return LFSR;
})();
