//Money Coint - Challenge

function moneyCoins (num) {
	var counter = [10000,5000,2000,1000,500,200,100,50,20,10,1];
	var pecahan = [];
	
	for(var i=0; i<counter.length; i++){
		while(num - counter[i] >= 0){
			num = num - counter[i];
			pecahan.push(counter[i]);
		}
	}
	
	return pecahan;
  
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
