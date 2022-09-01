const add7 = (number) => {
    return number + 7
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
}

const lastLetter = (string) => {
    return string[string.length - 1]
}

console.log(add7(8))
console.log(multiply(12,4))
console.log(capitalize('hello'))
console.log(lastLetter('hello'))

