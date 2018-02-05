function moneyCoins (num) {
  if(num <= 1){
    return num;
  } else {
    var arr = [1,10,20,50,100,200,500,1000,2000,5000,10000];

    // kurangi dengan angka yang mendekati
    var result = [];
    for(var i=arr.length-1; i>=0; i--){
      
      if(num > arr[i]){
        // console.log(arr[i]);
        newnum = num-arr[i];
        result.push(arr[i]);
        break;
      } 
    }
    return result.concat(moneyCoins(newnum));
  }
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
