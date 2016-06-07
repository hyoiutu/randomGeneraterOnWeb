var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LFSR = (function (_super) {
    __extends(LFSR, _super);
    function LFSR(seed, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 4294967295; }
        _super.call(this, seed, min, max, 65535);
    }
    LFSR.prototype.generate = function () {
        var bit;
        bit = (this.rndNum_m & 0x0001) ^
            ((this.rndNum_m & 0x0004) >> 2) ^
            ((this.rndNum_m & 0x0008) >> 3) ^
            ((this.rndNum_m & 0x0020) >> 5);
        this.rndNum_m = (this.rndNum_m >> 1) | (bit << 15);
        return _super.prototype.uniform.call(this);
    };
    return LFSR;
}(Random));
