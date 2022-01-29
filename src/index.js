module.exports = function toReadable(number) {
    const arrZN = ['^', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const arrTenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const arrTwentyNinety = ['^', '^', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number === 0) {
        return 'zero'
    }
    else if (number.toString().length === 1) {
        return arrZN[number.toString()[0]]
    } else if (number.toString().length === 2) {
        if (number.toString()[0] === '1') {
            return arrTenNineteen[number.toString()[1]]
        } else {
            if (number.toString()[1] === '0') {
                return arrTwentyNinety[number.toString()[0]]
            }
            return `${arrTwentyNinety[number.toString()[0]]} ${arrZN[number.toString()[1]]}`
        }
    } else if (number.toString().length === 3) {
        if (number.toString()[1] === '1') {
            return `${arrZN[number.toString()[0]]} hundred ${arrTenNineteen[number.toString()[2]]}`
        } else if (number.toString()[1] === '0' && number.toString()[2] !== '0') {
            return `${arrZN[number.toString()[0]]} hundred ${arrZN[number.toString()[2]]}`
        } 
        else if (number.toString()[1] === '0' && number.toString()[2] === '0') {
            return `${arrZN[number.toString()[0]]} hundred`
        } 
        else if (number.toString()[2] === '0') {
            return `${arrZN[number.toString()[0]]} hundred ${arrTwentyNinety[number.toString()[1]]}`
        } else {
            return `${arrZN[number.toString()[0]]} hundred ${arrTwentyNinety[number.toString()[1]]} ${arrZN[number.toString()[2]]}`
        }
    }
    
}
