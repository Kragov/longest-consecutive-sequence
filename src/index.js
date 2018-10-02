module.exports =function longestConsecutiveLength(array) {

    if (array.length === 0) {
        return 0
    }

    if (array.length === 1) {
        return 1
    }
    array.sort(function (a, b) {
        return a - b
    })

    let counter = 1
    let longConsLeng = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] - array[i-1] === 1 ) {
            counter++
        }
        else if (array[i] - array[i-1] > 1) {
            longConsLeng = Math.max(counter, longConsLeng)
            counter = 1
        }
    }
    return longConsLeng
}