function subString(str, subStr) {
    for(let i=0; i<str.length; i++) {
        count = 0
        for(let j=0; j<subStr.length; j++){
            if(str[i+j] == subStr[j]){
                ++count
            }
            if(count == subStr.length) {
                return true
            }
        }
    }
    return false
}

res = subString("chandanhank", "hank")
console.log(res)