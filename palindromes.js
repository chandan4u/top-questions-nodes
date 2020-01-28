var request = [
    "Anna",
    "Civic",
    "Kayak",
    "Don't nod .",
    "I did, did I?",
    "My gym",
    "Red rum, sir, is murder",
    "Step on no pets",
    "Top spot",
    "Was it a cat I saw?",
    "Eva, can I see bees in a cave?",
    "No lemon, no melon"
]

for(let k=0; k<request.length; k++) {
    requestConcat = request[k].toLowerCase().replace(/[^a-zA-Z]/g, "")
    status = isPalindrome(requestConcat)
    console.log(status)
}

function isPalindrome(requestConcat) {
    var isPalindrome = true
    for (let i = 0; i < requestConcat.length; i++) {
        if (requestConcat[i] != requestConcat[requestConcat.length - i - 1]) {
            isPalindrome = false
            break
        }
    }
    return isPalindrome
}