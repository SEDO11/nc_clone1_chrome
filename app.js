// const a = 5
// const b = 2
// let myName = "SeHoon"
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(myName)
// myName = "OH"
// console.log(myName)


// let day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// let text = ['', '']
// for (let i = 0; i < day.length; i++) {
//     text[0] += day[i] + " "
// }
// console.log(day)
// console.log(text[0])
// day.push("hello")
// for (let i = 0; i < day.length; i++) {
//     text[1] += day[i] + " "
// }
// console.log(day)
// console.log(text[1])


//오브젝트
// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// }
// console.log(player)
// console.log(player.name)
// player.lastName = "potato"
// player.points = 15
// console.log(player)

// //함수

// function hello(name, age) {
//     console.log('Hello, My name is ' + name + " and I'm " + age + " years old")
// }

// hello("suzan", 15)
// hello("dico", 20)
// hello("minji", 35)

// const player = {
//     name: "nico",
//     sayHello: function(name) {
//         console.log("hello " + name + " nice meet you ")
//         document.write("hello " + name + " nice meet you! ")
//     },
// }

// console.log(player.name)
// player.sayHello("lynn")
// player.sayHello("dico")
// player.sayHello("suzan")

// const player2 = {
//     name: "nico",
//     age: "25",
// }
// console.log(player2.name)
// console.log(player2)
// player2.name = "nicolas"
// console.log(player2)
// player2.sexy = "soon"
// console.log(player2)

// const NUM1 = 4
// const NUM2 = 5

// const calculator = {
//     add: function (a, b) {
//         console.log(a + b)
//     },

//     min: function (a, b) {
//         console.log(a - b)
//     },

//     divi: function (a, b) {
//         console.log(a / b)
//     },

//     mun: function (a, b) {
//         console.log(a * b)  
//     },

//     squ: function (a, b) {
//         console.log(a ** b)  
//     },
// }

// calculator.add(NUM1, NUM2)
// calculator.min(NUM1, NUM2)
// calculator.mun(NUM1, NUM2)
// calculator.divi(NUM1, NUM2)
// calculator.squ(NUM1, NUM2)

// const test = {
//     myName: function (name) {
//       document.write('Hello My is ' + name + ' nice meet you')  
//     },
// }
// test.myName("Hoon")

// let result = document.getElementById('result')
// let sub = document.getElementById('sub')

// let num1 = 0
// let num2 = 0

// function inputNum() {
//     num1 = window.Number(prompt('첫번째 숫자를 입력하세요'))
//     num2 = window.Number(prompt('두번째 숫자를 입력하세요'))
// }

// const cal = {

//     add: function () {
//         let addResult = num1 + num2
//         sub.innerHTML = '(덧셈)'
//         result.innerHTML = addResult
//     },

//     min: function () {
//         let minResult = num1 - num2
//         sub.innerHTML = '(뺄셈)'
//         result.innerHTML = minResult
//             },

//     mun: function () {
//         let munResult = num1 * num2
//         sub.innerHTML = '(곱셈)'
//         result.innerHTML = munResult
//             },

//     divi: function () {
//         let diviResult = num1 / num2
//         sub.innerHTML = '(나눗셈)'
//         result.innerHTML = diviResult
//             },

//     squ: function () {
//         let squResult = num1 ** num2
//         sub.innerHTML = '(제곱)'
//         result.innerHTML = squResult
//         },
// }

// const age = 96
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2
// }

// const krAge = calculateKrAge(age)

// console.log(krAge)

// const NUM1 = 4
// const NUM2 = 5

// const calculator = {
//     add: function (a, b) {
//         return a + b
//     },

//     min: function (a, b) {
//         return a - b
//     },

//     divi: function (a, b) {
//         return a / b
//     },

//     mun: function (a, b) {
//         return a * b  
//     },

//     squ: function (a, b) {
//         return a ** b  
//     },
// }

// const result = calculator.add(2, 3)

// console.log(result)

//조건문

// const PRINT = document.getElementById('print')

// const age = Number(prompt('당신은 몇 살 인가요?'))

// if(age < 20) {
//     PRINT.innerHTML = '초년층'
// } else if (age < 40) {
//     PRINT.innerHTML = '중년층'
// } else {
//     PRINT.innerHTML = '장년층'
// }

const title = document.getElementById('title')
title.innerText = "안뇽"