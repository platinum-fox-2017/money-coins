function moneyCoins(num) {
  var pecahan = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  var result = [];
  var newNum;
  
  if(num === 1) {
    return result.push(pecahan[0]);
  }

  if(num > pecahan[pecahan.length-1]) {
    result.push(pecahan[pecahan.length-1]);
    newNum = num - pecahan[pecahan.length-1];
  }

  for(var i = 0; i < pecahan.length; i++) {
    if(pecahan[i] < num && num < pecahan[i+1]) {
      // console.log('####', pecahan[i]);
      result.push(pecahan[i]);
      newNum = num - pecahan[i];
    }
  }

  // console.log(result);
  // console.log(newNum);
  var finalResult = result.concat(moneyCoins(newNum));
  return finalResult;
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
// //output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]