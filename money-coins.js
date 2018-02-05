// let result = []
// function moneyCoins(num) {
//     let exchangeRate = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
//     if (num <= 0) {
//         return result
//     } else {
//         for (let [index, value] of exchangeRate.entries()) {
//             // console.log(index, value)
//             if (num >= value) {
//                 // console.log(value)
//                 result.push(value)
//                 // console.log(result)
//                 return moneyCoins(num - value)
//             }
//         }
//     }
// }

// console.log(moneyCoins(9231))

function moneyCoins(num, arr) {
    let exchangeRate = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    if (!arr) {
        arr = []
    }
    for(let value of exchangeRate){
        if (num >= value) {
            arr.push(value)
            return moneyCoins(num-value, arr)
        }
    }
    return arr
}

console.log(moneyCoins(5231))


//testing using filter()

// let result = []
// function moneyCoins(num) {
    // let exchangeRate = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    // const result = exchangeRate.filter((num) => num > 20)
// }

// console.log(result)
// console.log(moneyCoins(9231))