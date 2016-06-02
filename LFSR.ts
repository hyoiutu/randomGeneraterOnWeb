class LFSR{
  private seed_m: number;
  private rndNum_m: number;

  constructor(private seed: number){
    this.seed_m = seed;
    this.rndNum_m = seed;
  }

  public generate(): number{
    var bit: number;
    bit = (this.rndNum_m & 0x00000001) ^
          ((this.rndNum_m & 0x00000002) >> 1) ^
          ((this.rndNum_m & 0x20000000) >> 21) ^
          ((this.rndNum_m & 0x80000000) >> 31);
    this.rndNum_m = (this.rndNum_m >> 1) | (this.rndNum_m << 31);
    return this.rndNum_m;
  }
}
