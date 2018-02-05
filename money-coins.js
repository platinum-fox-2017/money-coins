'use strict'

const bank = [1,10,20,50,100,200,500,1000,2000,5000,10000]

const convertToCoin = coin => {
  let arrMoney = []
  for (let i = bank.length-1; i >=0 ; i--) {
    while( coin >= bank[i] ) {
      arrMoney.push(bank[i])
      coin -= bank[i]
    }
  }
  return arrMoney
}

console.log(convertToCoin(55000));
console.log(convertToCoin(25525));
