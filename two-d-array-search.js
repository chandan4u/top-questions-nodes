function arraySearch(arr, x) {
    for(let i =0; i <arr.length; i++) {
        for(let j=0; j <arr[i].length; j++) {
            let counter = 0
            for(let k=0; k <x.length; k++) {
                if(arr[i][j] == x[k]){
                    ++counter
                    if(counter == x.length) {
                        return true
                    }
                    res =checkDirection(i,j,k,arr,x)
                    console.log(res)
                    if (res == false) {
                        return false
                    }
                    i = res[0]
                    j = res[1]
                } else {
                    break
                }
            }
        }
    }
}

function checkDirection(i,j,k,arr,x) {
    if(j+1 < arr.length && arr[i][j+1] == x[k+1]){
        return [i, j+1]
    }
    if(j-1 >= 0 && arr[i][j-1] == x[k+1]) {
        return [i, j-1]
    }
    if(i+1 < arr.length && arr[i+1][j] == x[k+1]) {
        return [i+1, j]
    }
    if(i-1 >= 0 && arr[i-1][j] == x[k+1]) {
        return [i-1, j]
    }
    return false
}



arr = [
    ["A", "X", "M", "C"],
    ["P", "E", "S", "Q"],
    ["L", "A", "L", "B"],
    ["O", "Y", "T", "H"]
]

x = ["M","X","A","P","E","Y"]

res = arraySearch(arr, x)
console.log(res)

