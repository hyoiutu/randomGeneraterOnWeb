class RandStr{
  public randomString: string
  private wordCount: number
  constructor(){
    this.randomString = "";
  }
  public generate(engine: Random){
    for(var i=0;i<this.wordCount;++i){
      this.randomString += engine.generate()%26 + 'a'
    }
  }
}
