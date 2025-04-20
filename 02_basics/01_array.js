/*
Javascript Arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes.

JS Arrays are zero-indexed, i.e first element of an array index starts from 0.

JS array-copy operations create shallow copies(share the same reference point, change in one reflects in another too) rather than deep copies.
*/

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","Naagraj","Harry"]

const myArr2 = new Array("apple",2,true)

console.log(myArr2[0])  //apple

//Array methods

myArr.push(6)  //Adds element at last
myArr.push(7)

myArr.pop()   //Removes the last element
console.log(myArr)  /*[
    0, 1, 2, 3,
    4, 5, 6
  ]*/

myArr.unshift(9)  //adds the element at the beginning
console.log(myArr)  /*[
    9, 0, 1, 2, 3,
    4, 5, 6
  ]*/
myArr.shift()  //it removes the first element
console.log(myArr.includes(9))  //false
console.log(myArr.indexOf(9))  //-1
console.log(myArr.indexOf(2))  //2

const newArr = myArr.join()  //Adds all the elementf of an array into a string separated by a separator.

console.log(myArr)  /*
[
  0, 1, 2, 3,
  4, 5, 6
]*/
console.log(newArr)  //0,1,2,3,4,5,6
console.log(typeof newArr)  //string

//slice , splice
/*
slice - does not includes the last element given. No changes occurs in original array.

splice - includes all the elements in the range including the last one... And also, the spliced portion gets eliminated from the original array too.
*/
console.log("A", myArr)
/*
A [
  0, 1, 2, 3,
  4, 5, 6
]
*/

const myNew1 = myArr.slice(1,3)
console.log(myNew1)  //[1, 2]

console.log("B", myArr)
/*
B [
  0, 1, 2, 3,
  4, 5, 6
]
*/

const myNew2 = myArr.splice(1,3)
console.log(myNew2)  //[1, 2, 3]

console.log("C", myArr)
/*
C [ 0, 4, 5, 6 ]
*/