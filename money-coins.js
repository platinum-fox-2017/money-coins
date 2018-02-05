function moneyCoins (num) {
  let bankUang = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  let newArr = []

  for (var i = 0; i < bankUang.length; i++) {
    while (num >= bankUang[i]) {
      // console.log(num);
      newArr.push(bankUang[i])
      num -= bankUang[i]
    }
  }
  return newArr
}

// console.log(money_coins(7752));


// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
