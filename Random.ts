class Random{
  protected RAND_MAX: number = 4294967295;
  protected seed_m: number;
  protected rndNum_m: number;
  protected min_m: number;
  protected max_m: number;

  constructor(seed: number,
              min: number = 0,
              max: number = 4294967295,
              rand_max: number = 4294967295){
    this.seed_m = seed;
    this.rndNum_m = seed;
    this.min_m = min;
    this.max_m = max;
    this.RAND_MAX = rand_max;
  }

  public generate(): number{
    return Math.random();
  };

  public uniform() : number{
    var rangeRnd: number = this.min_m +
               Math.floor((this.max_m - this.min_m + 1.0) *
               this.rndNum_m / (this.RAND_MAX + 1.0));
    return rangeRnd;
  }

  public generates(num: number): string{
    var rndStr: string = "";
    for(var i=0;i<num;++i){
      rndStr += this.generate() + " ";
    }
    return rndStr;
  }
}
