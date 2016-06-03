class LFSR{
  private seed_m: number;
  private rndNum_m: number;

  constructor(private seed: number){
    this.seed_m = seed;
    this.rndNum_m = seed;
  }

  public generate(): number{
    var bit: number;
    bit = (this.rndNum_m & 0x0001) ^
          ((this.rndNum_m & 0x0004) >> 2) ^
          ((this.rndNum_m & 0x0008) >> 3) ^
          ((this.rndNum_m & 0x0020) >> 5);
    this.rndNum_m = (this.rndNum_m >> 1) | (bit << 15);
    return this.rndNum_m;
  }
}
