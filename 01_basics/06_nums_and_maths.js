const score = 400
console.log(score)  //400

//if you want to explicitly define as Number then

const balance = new Number(100)
console.log(balance)  //[Number: 100]
console.log(balance.toString().length)  //3
console.log(balance.toFixed(2))  //100.00

const otherNum = 23.8966
const otherNum2 = 123.8966
const otherNum3 = 1234.987
console.log(otherNum.toPrecision(3))   //23.9
console.log(otherNum2.toPrecision(3))  //124
console.log(otherNum3.toPrecision(3))  //1.23e+3
console.log(typeof(otherNum.toPrecision()))  //string

const hundreds = 10000000
console.log(hundreds.toLocaleString())  //10,000,000
console.log(hundreds.toLocaleString('en-IN'))  //1,00,00,000

console.log(Number.MIN_VALUE)  //5e-324
console.log(Number.MAX_VALUE)  //1.7976931348623157e+308

/*++++++++++++++++ MATHS ++++++++++++++++++++++++++*/

console.log(Math)  //Object [Math] {}
console.log(Math.abs(-57))  //57
console.log(Math.round(4.3))  //4
console.log(Math.round(4.7))  //5
console.log(Math.ceil(4.3))  //5
console.log(Math.floor(4.9))  //4
console.log(Math.min(4,3,6,9))  //3
console.log(Math.max(4,3,6,9))  //9

console.log(Math.random())  //values will range from 0-1
console.log((Math.random()*10) + 1)  //always > 0
console.log(Math.floor(Math.random()*10) + 1)  //5

const min = 20
const max = 40

console.log((Math.random() * (max - min + 1)) + min)
//30.258172865264342

/* In the above log, first it will find the random number then add it with 1(so that num > 0) and to get the number greater than min and less than max , add min. */