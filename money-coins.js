

function moneyCoins (num) {

  //
  var pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  var converted = [];
  var repeat;

  for (var i = 0; i < pecahan.length; i++) {
    repeat = 1;
    if (num > pecahan[i]){
      repeat = Math.floor(num / pecahan[i]);
      // console.log(pecahan[i] + ' pecahan' + repeat);
      // add pecahan[i] to converted as many as repeat, reduce num with pecahan[i] as many as repeat
      for (var mult = 1; mult <= repeat; mult++) {
        converted.push(pecahan[i]);
        num = num - pecahan[i];
      }
    }
  }
  return converted;
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
