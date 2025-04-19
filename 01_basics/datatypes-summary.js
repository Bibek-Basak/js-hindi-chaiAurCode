//Primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100

const scoreValue = 100.3
console.log(typeof scoreValue)   //number

const isLoggedIn = false
console.log(typeof isLoggedIn)  //boolean

const temperature = null
console.log(typeof temperature)   //object

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)  //Symbol(123)
console.log(anotherId)  //Symbol(123)

console.log(id === anotherId)  //false

const bigNumber = 663491720197021
console.log(typeof(bigNumber))   //Number

const bigIntNumber = 663491720197021n
console.log(typeof(bigIntNumber))  //BigInt


//Reference (Non-primitive)

//Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"]
console.log(heros)
console.log(typeof heros)   //object

//Object
let myObj = {
    name : "Bibek",
    age : 24,
    city : "Delhi"
}

console.log(myObj)
console.log(typeof myObj)   //object

//Function
const myFunc = function() {
    console.log("Hello world")
}

console.log(myFunc)
console.log(typeof myFunc)   //function object
