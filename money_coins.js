const coin = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]

function convertToCoin(value) {
  let result = [];
  for(let i=coin.length; i>=0; i--){
    while(coin[i] <= value){
      result.push(coin[i]);
      value -= coin[i];
    }
  }
  return result;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
