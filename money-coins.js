// Solution 1  - note recursive
function moneyCoins (num) {
  // your implementation code here
  var arrayCoin = [1,10,20,50,100,200,500,1000,2000,5000,10000];
  var pointer = arrayCoin.length-1;
  var result = [];
  while(num>=0){
    if(num==0)
      return result;

    var tempNumber = Math.floor(num/arrayCoin[pointer]);
    if(tempNumber>0){
      for(var i=0;i<tempNumber;i++)
        result.push(arrayCoin[pointer]);
      num = num%arrayCoin[pointer];
      pointer --;
    }
    else {
      pointer --;
    }
  }
  return result;
}

// Solution 2 - recursive
function moneyCoins (num) {
  // your implementation code here
  var arrayCoin = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  var result = [];

  if(num == 0)
    return [];

  for(var i = 0; i<arrayCoin.length;i++){
    if(num/arrayCoin[i]>=1){
      result.push(arrayCoin[i]);
      return result.concat(moneyCoins(num-arrayCoin[i]));
    }
  }
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
