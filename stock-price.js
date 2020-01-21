function stockPrice(arr) {
    profit = 0
    for(let i=0; i<arr.length-1; i++) {
        diff = arr[i+1] - arr[i]
        if(profit < diff) {
            profit = diff
        }
    }
    return profit
}

res = stockPrice([2,10,3,6,9,70])
console.log(res)