class LCG extends Random{
  A: number = 1025;
  B: number = 5;
  M: number = 2048; // = 2**32 - 1;
  RAND_MAX: number = this.M;

  constructor(seed: number,
              min: number = 0,
              max: number = 4294967295
              ){
    super(seed, min, max, 4294967295);
  }

  public generate(): number{
    var rangeRnd: number;
    this.rndNum_m = (this.A * this.rndNum_m + this.B)%this.M;
    return super.uniform();
  }
}
