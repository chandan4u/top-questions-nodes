function combination(array) {
    const result = [[]]
    for(let i=0; i<array.length; i++) {
        const temp = [...result]
        for(let j=0; j<temp.length; j++) {
            result.push(temp[j].concat(array[i]))
        }
    }
    return result
}

console.log(combination([1, 2, 3, 6, 9]))