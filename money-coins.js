function moneyCoins (num) {
  var arrPecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  var arrBalikan = [];

  var indeksTerbesar = 0;
  var pecahanTerbesar = 0;

  for (var i = 0; i < arrPecahan.length; i++) {
    if (num > arrPecahan[i]) {
      if (arrPecahan[i] > pecahanTerbesar) {
        indeksTerbesar = i;
        pecahanTerbesar = arrPecahan[i];
      }   
    }
  }

  pecahanTerbesar = 0;

  var total = 0;
  var sisa = 0;

  arrBalikan.push(arrPecahan[indeksTerbesar]);
  total = total + arrPecahan[indeksTerbesar];
  sisa  = num - total;

  while (total < num) {
    if (arrPecahan[indeksTerbesar] < sisa) {

      arrBalikan.push(arrPecahan[indeksTerbesar]);
      total = total + arrPecahan[indeksTerbesar];
      sisa  = num - total;

    } else {

      for (i = 0; i < arrPecahan.length; i++) {
        if (sisa > arrPecahan[i]) {
          if (arrPecahan[i] > pecahanTerbesar) {
            indeksTerbesar = i;
            pecahanTerbesar = arrPecahan[i];
          }   
        }
      }

      pecahanTerbesar = 0;

      arrBalikan.push(arrPecahan[indeksTerbesar]);
      total = total + arrPecahan[indeksTerbesar];
      sisa  = num - total;
    }
  }

  return arrBalikan;
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]