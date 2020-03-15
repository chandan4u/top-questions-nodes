function findIsland(array) {
    let result = 0
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array.length; j++) {
            if(array[i][j] == 1) {
               directionIndex = checkIndexInAllDirection(i,j,array)
               i = directionIndex[0]
               j = directionIndex[1]
               console.log(directionIndex)
               ++result
            }
        }
    }
    return result
}

function checkIndexInAllDirection(i,j,array) {
    if(i+1 < array.length && array[i+1][j] == 1) {
        return [i+1, j]
    }
    if(i-1 >= 0 && array[i-1][j] == 1) {
        return [i-1, j]
    }
    if(j+1 < array.length && array[i][j+1] == 1) {
        return [i, j+1]
    }
    if(j-1 >= 0 && array[i][j-1] == 1) {
        return [i, j-1]
    }
    return [i,j]
}

array = [
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 0]
]
console.log(findIsland(array))