function pecahan(money) {
  // your implementation code here
  change = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  output = [];

  for (i = 0; i < change.length; i++){
    while(money >= change[i]){
      output.push(change[i]);
      money -= change[i]
      // console.log(money)
    }
  }
  return output
}

// Drive code
console.log(pecahan(543))
// output: [500, 20, 20, 1, 1, 1]

console.log(pecahan(7752))
// output: [5000, 2000, 500, 200, 50, 1, 1]

console.log(pecahan(37454))
// output: [10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1]