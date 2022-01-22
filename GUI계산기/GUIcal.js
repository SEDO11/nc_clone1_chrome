let result = document.getElementById('result')
let sub = document.getElementById('sub')

let num1 = 0
let num2 = 0

function inputNum() {
    num1 = window.Number(prompt('첫번째 숫자를 입력하세요'))
    num2 = window.Number(prompt('두번째 숫자를 입력하세요'))
}

const cal = {

    add: function () {
        let addResult = num1 + num2
        sub.innerHTML = '(덧셈)'
        result.innerHTML = addResult
    },

    min: function () {
        let minResult = num1 - num2
        sub.innerHTML = '(뺄셈)'
        result.innerHTML = minResult
            },

    mun: function () {
        let munResult = num1 * num2
        sub.innerHTML = '(곱셈)'
        result.innerHTML = munResult
            },

    divi: function () {
        let diviResult = num1 / num2
        sub.innerHTML = '(나눗셈)'
        result.innerHTML = diviResult
            },

    squ: function () {
        let squResult = num1 ** num2
        sub.innerHTML = '(제곱)'
        result.innerHTML = squResult
        },
}