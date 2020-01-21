// Time complexity is n2
function sumOfTwoNumber(arr, n) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i; j<arr.length; j++) {
            if(arr[i] + arr[j] == n){
                return [arr[i], arr[j]]
            }
        }
    }
}

res = sumOfTwoNumber([2,5,3,6,9,1], 12)
console.log(res)

function sumOfTwoNumberWithHashTable(arr, n) {
    hashTable = {}
    for(let i=0; i<arr.length; i++) {
        if(hashTable[n - arr[i]] != undefined) {
            return [n - arr[i], arr[i]]
        }
        hashTable[arr[i]] = n - arr[i]
    }
    return false
}

res = sumOfTwoNumberWithHashTable([2,10,3,6,9,10], 20)
console.log(res)