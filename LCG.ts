class LCG{
  A: number = 1023;
  B: number = 5;
  M: number = 4294967296 // = 2**32;

  private seed_m: number;
  private rndNum_m: number;

  constructor(private seed: number){
    this.seed_m = seed;
    this.rndNum_m = seed;
  }

  public generate(): number{
    this.rndNum_m = (this.A * this.rndNum_m + this.B)%this.M;
    return this.rndNum_m;
  }
}
