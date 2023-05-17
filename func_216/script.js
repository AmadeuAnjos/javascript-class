function soma() {
    var result = 0
    for (var i in arguments) {
        result += arguments[i]
    }
    return result
}

console.log(soma(7, 5, 3.2))