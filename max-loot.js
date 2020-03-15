// # Max money you can get it from the houses.

// # Input  : hval[] = {6, 7, 1, 3, 8, 2, 4}
// # Output : 19
// # Thief will steal 6, 1, 8 and 4 from house.

// # Input  : hval[] = {5, 3, 4, 11, 2}
// # Output : 16
// # Thief will steal 5 and 11

let arr = [5, 3, 4, 11, 2]
maxLoot = []
maxLoot[0] = arr[0]
maxLoot[1] = Math.max(arr[0], arr[1])
result = []
for(let i=2; i<arr.length; i++) {
    sumOfLoot = maxLoot[i-2] + arr[i]
    if (sumOfLoot > maxLoot[i-1]) {
        maxLoot.push(sumOfLoot)
        resultIndex = maxLoot[i] - maxLoot[i-2]
        result.push(resultIndex)
    } else {
        maxLoot.push(maxLoot[i-1])
    }
}

console.log(maxLoot, result)
