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

const player = {
    name: "nico",
    sayHello: function(name) {
        console.log("hello " + name + " nice meet you ")
        document.write("hello " + name + " nice meet you! ")
    },
}

console.log(player.name)
player.sayHello("lynn")
player.sayHello("dico")
player.sayHello("suzan")