/*
1. Create 1 empty array and 1 array containing the coin nominals
2. Create a for loop to go through the array containing the nominals
3. Inside the for loop, create a while loop with condition;
4. If the condition is met, push the nominal into the empty array and subtract the target by the nominal value
5. Return the array
*/
let convertToCoin = (target) => {
    let pecahan = [1,10,20,50,100,200,500,1000,2000,5000,10000];
    let coin =[];
    for(let i=pecahan.length; i>=0 ; i--){
        while(pecahan[i] <= target){
            coin.push(pecahan[i]);
            target -= pecahan[i];
        }
    }
    return coin;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
