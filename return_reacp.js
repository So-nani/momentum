const cal = {
  add: function(a,b){
    return a + b;
  },
  minus: function(a,b){
    return a - b;
  },
  divide: function(a,b){
    return a / b;
  },
  power: function(a,b){
    return a ** b;
  }
}

const plusResult = cal.add(1, 2);
const minusResult = cal.minus(plusResult, 2);
const divideResult = cal.divide(minusResult, 2);
const powerResult = cal.power(divideResult, 2);