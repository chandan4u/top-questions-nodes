// Binary search only work on sorted value

function binarySearch(arr, x) {
    let mid = Math.floor(arr.length/2)
    if(arr[mid] == x) {
        return "Element Found"
    } else if(arr[mid] > x && arr.length > 1) {
        return binarySearch(arr.slice(0, mid), x)
    } else if(arr[mid] < x && arr.length > 1) {
        return binarySearch(arr.slice(mid, arr.length), x)
    } else {
        return "Element Not Found"
    }
}

result = binarySearch([1,2,3,4,5,6], 6)
console.log(result)