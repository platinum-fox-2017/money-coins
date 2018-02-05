function moneyCoins (num) {
  let pecahan=[];
    let arrNum = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
    for(let i=0; i<arrNum.length; i++){
        while(num>=arrNum[i]){
            pecahan.push(arrNum[i])
            num-=arrNum[i]
        }
    }
    return pecahan  
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
