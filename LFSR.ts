class LFSR extends Random{

  constructor(seed: number,
              min: number = 0,
              max: number = 4294967295
              ){
    super(seed, min, max, 65535);
  }

  public generate(): number{
    var bit: number;
    bit = (this.rndNum_m & 0x0001) ^
          ((this.rndNum_m & 0x0004) >> 2) ^
          ((this.rndNum_m & 0x0008) >> 3) ^
          ((this.rndNum_m & 0x0020) >> 5);
    this.rndNum_m = (this.rndNum_m >> 1) | (bit << 15);
    return super.uniform();
  }
}
