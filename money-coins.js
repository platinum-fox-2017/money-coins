function moneyCoins(num)
{
var counter=[1,10,20,50,100,200,500,1000,2000,5000,10000];
var tempArr=[];

  for(var i=counter.length-1;i>=0;i--)
    {
      while(num-counter[i]>=0)
      {
         num=num-counter[i];
        tempArr.push(counter[i])
      }
     
    }
  return tempArr;
}

console.log(moneyCoins(543));
//output [500,20,20,1,1,1]
console.log(moneyCoins(7752));
//output [5000,2000,500,200,50,1,1]
console.log(moneyCoins(37454));
//[10000,10000,10000,5000,2000,200,200,50,1,1,1,1]

