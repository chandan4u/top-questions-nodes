function duplicateCharacterCount(str) {
    hashTable = {}
    max=1
    character = str.charAt(0)
    for(let i=0; i<str.length; i++) {
        if(hashTable[str.charAt(i)] != undefined){
            ++hashTable[str.charAt(i)]
            if(hashTable[str.charAt(i)] > max) {
                max = hashTable[str.charAt(i)]
                character=str.charAt(i)
            }
        } else {
            hashTable[str.charAt(i)] = 1
        }
    }
    return [max,character] 
}

res = duplicateCharacterCount("chandan kumar")
console.log(res)