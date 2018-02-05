let hasil = []
function moneyCoins (num) {
  let kamus = [10000,5000,2000,1000,500,200,100,50,20,10,1]
    if(num <= 0){
        return hasil
    }else{

        // for(let [index,value] of kamus.entries()){
        //     if(num >= value){
        //         hasil.push(value)
        //         return moneyCoins(num -value)
                
        //     }
        // }

        const output = kamus.filter(each =>{
            let output = num / each
            
            if(output >=1){
                return output
            }
        });
        
        hasil.push(output[0])

        return moneyCoins(num-output[0])

    }
}



// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
