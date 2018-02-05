/*
input: numbers
process: LOOP and IF
output: array of numbers

*/


function moneyCoins (num) {
  // your implementation code here

  var hasilCoin = [];
  var pecahanCoin = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];

  while (num != 0) {
    var coinMax = pecahanCoin[0]; 
    var indexMax = 0;
    for (var i = 0; i < pecahanCoin.length; i++) { // to find index max per while
      if (pecahanCoin[i] <= num && pecahanCoin[i] > coinMax) {
        coinMax = pecahanCoin[0];
        indexMax++;
      }
    }

    hasilCoin.push(pecahanCoin[indexMax]);
    num -= pecahanCoin[indexMax];

  }

  return hasilCoin;

}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
