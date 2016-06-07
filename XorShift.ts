class XorShift{
  A: number = 1025;
  B: number = 5;
  M: number = 2048; // = 2**32 - 1;
  RAND_MAX: number = this.M;

  private seed_m: number;
  private rndNum_m: number;

  constructor(private seed: number){
    this.seed_m = seed;
    this.rndNum_m = seed;
  }

  public generate(min: number, max: number): number{
    var rangeRnd: number;
    this.rndNum_m = (this.A * this.rndNum_m + this.B)%this.M;
    rangeRnd = min + Math.floor((max - min + 1.0) * this.rndNum_m / (this.M + 1.0));
    return rangeRnd;
  }

  public generates(num: number, min: number, max: number): string{
    var rndStr: string = "";
    for(var i=0;i<num;++i){
      rndStr += this.generate(min, max) + " ";
    }
    return rndStr;
  }
}
