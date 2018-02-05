function moneyCoins(number) {
  // pecahan yang dimiliki, karena output dari besar maka pecahan dari 10000
  let counterCoin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  // karena output adalah array maka perlu array baru
  let pecahan = []
  let i = 0;
  // pengulangan selama panjang uang masih ada
  while (number > 0) {
    for (let i = 0; i < counterCoin.length; i++) {
      if (number >= counterCoin[i]) {
        pecahan.push(counterCoin[i])
        number -= counterCoin[i]
        // direset kembali lagi ke index terakhir atau netralin i++ di atas
        i--;
      }
    }
    return pecahan
  }
}


// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
