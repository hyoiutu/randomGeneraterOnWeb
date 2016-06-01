function getBMI(weight: number, tall: number):number{
  return weight / (tall * tall);
}

var bmi = getBMI(65,1.75);
