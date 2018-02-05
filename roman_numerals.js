function convertToCoin (num) {
  // your implementation code here
  var coins = [];
  var coinChanger = [10000,5000,2000,1000,500,200,100,50,20,10,1];  
  for(var i = 0; i < coinChanger.length; i++){
      while(num >= coinChanger[i]){
          coins.push(coinChanger[i]);    
          num -= coinChanger[i];
      }
    if(num <= 0){
        break;
    }
  }

  return coins;
}

// Drive code
console.log('Testing\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log( convertToCoin(543))
console.log( convertToCoin(7752))
console.log( convertToCoin(37454))
