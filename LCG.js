var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LCG = (function (_super) {
    __extends(LCG, _super);
    function LCG(seed, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 4294967295; }
        _super.call(this, seed, min, max, 4294967295);
        this.A = 1025;
        this.B = 5;
        this.M = 2048;
        this.RAND_MAX = this.M;
    }
    LCG.prototype.generate = function () {
        var rangeRnd;
        this.rndNum_m = (this.A * this.rndNum_m + this.B) % this.M;
        return _super.prototype.uniform.call(this);
    };
    return LCG;
}(Random));
