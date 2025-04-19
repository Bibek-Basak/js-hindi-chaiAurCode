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

/*************************************** */

/* There are 2 types of memory in Javascript. i.e stack memory or heap memory.
Stack memory is used in all primitive types. In stack memory, you will get a copy. Change in one won't change another.
Heap memory is used in all non-primitive or object types. In heap memory, you will get reference. So, change in one will reflect in another also.
*/

//Primitive datatypes (copy)
let myName = "Bibek Basak"

let myOrginalName = myName
console.log(myOrginalName)  //Bibek Basak

myOrginalName = "Github classes"
console.log(myOrginalName)  //Github classes
console.log(myName)  //Bibek Basak

//Non-primitive datatypes (same reference)
let user1 = {
    email : "bibek@gmail.com",
    upiId : "phonepe@ybl"
}

let user2 = user1

console.log(user1)  //{ email: 'bibek@gmail.com', upiId: 'phonepe@ybl' }
console.log(user2)  //{ email: 'bibek@gmail.com', upiId: 'phonepe@ybl' }

user2.email = "bibek@yahoo.com"
user2.upiId = "gpay@axl"

console.log(user2)  //{ email: 'bibek@yahoo.com', upiId: 'gpay@axl' }
console.log(user1)  //{ email: 'bibek@yahoo.com', upiId: 'gpay@axl' }