console.log(2>1)  //true
console.log(2>=1)  //true
console.log(2<1)  //false
console.log(2<=1)  //false
console.log(2==1)  //false
console.log(2!=1)  //true

console.log("2">1)  //true
console.log("02">1)  //true

console.log(null == 0)  //false
console.log(null > 0)  //false
console.log(null < 0)  //false
console.log(null >= 0)  //true
console.log(null <= 0)  //true

console.log(undefined == 0)  //false
console.log(undefined > 0)  //false
console.log(undefined < 0)  //false

console.log("2" == 2)  //true
console.log("2" === 2)  //false

console.log("1" == true)  //true
console.log("" == false)  //true
console.log("0" == false)  //true
console.log("2" == true)  //false

/*
Problem is that when these types of conversion takes place, comparison does not gives the predictable result.
So, whenever you compare two values, ensure that they have the same datatypes.

The reason is that an equality check == and comparisons < > >= <= work differently.
Comparisons convert null to a number, treating it as 0.

=== checks both the values as well as datatypes.
*/