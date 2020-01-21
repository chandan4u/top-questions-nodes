function sumOfNNumberInSequence(arr, n) {
    for(let i=0; i<arr.length; i++) {
        sum = 0
        res = []
        for(let j=i; j<arr.length; j++) {
            sum = sum+arr[j]
            res.push(arr[j])
            if(sum > n){
                break
            }
            if(sum == n) {
                return res
            }
        }
    }
    return false
}

res = sumOfNNumberInSequence([2,10,7,6,9,10], 23)
console.log(res)