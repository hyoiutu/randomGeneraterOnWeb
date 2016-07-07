var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XorShift = (function (_super) {
    __extends(XorShift, _super);
    function XorShift(seed, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 4294967295; }
        _super.call(this, seed, min, max, 4294967295);
        this.A = 13;
        this.B = 17;
        this.C = 5;
    }
    XorShift.prototype.generate = function () {
        this.rndNum_m = (this.rndNum_m ^ (this.rndNum_m << this.A)) >>> 0;
        this.rndNum_m = (this.rndNum_m ^ (this.rndNum_m >>> this.B)) >>> 0;
        this.rndNum_m = (this.rndNum_m ^ (this.rndNum_m << this.C)) >>> 0;
        return _super.prototype.uniform.call(this);
    };
    return XorShift;
}(Random));
