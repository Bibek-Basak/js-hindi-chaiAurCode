let score = 33
let marks = "33"
let position = "33abc"
let valueNull = null
let valueund = undefined
let boolVal1 = true
let boolVal2 = false

console.log(typeof marks)  //string
console.log(typeof score);  //number
console.log(typeof(score));  //number
console.log(typeof position);  //string


//Assume you got the value from a Form in string but you know that the operation should be performed in number 

let valueInNumber = Number(marks)
console.log(typeof valueInNumber)  //number

let valOfPosition = Number(position) 
let valNull = Number(valueNull) 
let valund = Number(valueund)
let booVal1 = Number(boolVal1)
let booVal2 = Number(boolVal2)

console.log(typeof valOfPosition)  //number
console.log(valOfPosition)  //NaN
console.log(typeof valNull)  //number
console.log(valNull);  //0
console.log(typeof valund);   //number
console.log(valund)   //Nan

console.log(typeof booVal1);   //number
console.log(booVal1)   //1

console.log(typeof booVal2);   //number
console.log(booVal2)   //0

let isLoggedIn = 1
let notLoggedIn = 0
let unusualLoggedIn = ""
let correctLoggedIn = "Bibek"

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleannotLoggedIn = Boolean(notLoggedIn)
let booleanunusualLoggedIn = Boolean(unusualLoggedIn)
let booleanCorrectLoggedIn = Boolean(correctLoggedIn)

console.log(booleanIsLoggedIn) //true
console.log(typeof booleanIsLoggedIn)  //boolean

console.log(booleannotLoggedIn)  //false
console.log(typeof booleannotLoggedIn)  //boolean

console.log(booleanunusualLoggedIn)  //false
console.log(typeof booleanunusualLoggedIn)  //boolean

console.log(booleanCorrectLoggedIn)  //true
console.log(typeof booleanCorrectLoggedIn)  //boolean

let someNumber = 33
let stringSomeNumber = String(someNumber)

console.log(typeof stringSomeNumber);  //string
console.log(stringSomeNumber);  //33


//There is a problem in JS i.e for strict type-checking, which here does not give the exact value of "33abcd" which is actually NaN.

/*
NaN is given by JS when a value cannot be converted into number but forcefully we are converting it.
"33" -> 33
"33abc" -> NaN
true -> 1   false -> 0
*/

// ***** Operations *****

let value = 3;
let negValue = -value
console.log(value)  //3
console.log(negValue)  //-3
console.log(2%3)  //2
console.log(2**3)  //8

let str1 = "Bibek"
let str2 = "Basak"

console.log(str1 + str2);  //BibekBasak
console.log(str1 - str2);  //NaN
console.log(str1 * str2);  //NaN
console.log(str1 / str2);  //NaN
console.log(str1 % str2);  //NaN

console.log("1" + 2)   //12  concatenation
console.log(1 + "2")   //12  concatenation
console.log("1" + "2") //12  concatenation
console.log("1" + 2 + 4)  //124
console.log(4 + 4 + "4")  //84

console.log(true)  //true
console.log(+true)  //1
//console.log(true+)  //error
console.log(+"")  //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)   //101
++gameCounter;
console.log(gameCounter)   //102

/*
In JS, if a string is added to any number then it will concatenate (append at end) rather than adding.
console.log("1" + 2 + 4)  //124

But in reverse case, it will first add those number then append the string after the result.
console.log(4 + 4 + "4")  //84

*/