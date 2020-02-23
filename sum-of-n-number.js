function sumOfNNumber(array, sum) {
    result = [[]]
    for(let i=0; i<array.length; i++) {
        const prefix = [...result]
        for(let j=0; j<prefix.length; j++) {
            result.push(prefix[j].concat(array[i]))
            if(sumOfElement(prefix[j].concat(array[i])) == sum) {
                console.log(prefix[j].concat(array[i]))
            }
        }
    }
    return result
}

function sumOfElement(result) {
    let sum = 0
    for(let i=0; i<result.length; i++) {
        sum += result[i]
    }
    return sum
}


sumOfNNumber([1,2,3,4,7,8,-1], 7)