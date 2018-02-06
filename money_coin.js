function convertToCoin(num){
  var coin = [10000,5000,2000,1000,500,200,100,50,20,10,1]
  var arrayCoin = []
  for(let i =0;i<coin.length;i++){
    while(coin[i]<=num){
      arrayCoin.push(coin[i])
      num-=coin[i]
    }
  }
  return arrayCoin
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
