function moneyCoins (num) {
  var duit = [10000,5000,2000,1000,500,200,50,20,10,1]
  var simpan=[]
  while(num>0){
    for(let i=0;i<duit.length;i++){
      if(num>=duit[i]){
        simpan.push(duit[i])
        num-=duit[i]
        break;
      }
    }
  }
  return simpan
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
