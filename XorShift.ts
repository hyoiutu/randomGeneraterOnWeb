class XorShift extends Random{
  A: number = 13;
  B: number = 17;
  C: number = 5;

  constructor(seed: number,
              min: number = 0,
              max: number = 4294967295){
    super(seed, min, max, 4294967295);
  }

  public generate(): number{
    this.rndNum_m = (this.rndNum_m ^ (this.rndNum_m << this.A)) >>> 0;
    this.rndNum_m = (this.rndNum_m ^ (this.rndNum_m >>> this.B)) >>> 0;
    this.rndNum_m = (this.rndNum_m ^ (this.rndNum_m << this.C)) >>> 0;
    return super.uniform();
  }
}
