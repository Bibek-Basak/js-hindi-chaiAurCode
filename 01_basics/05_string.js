console.log("hello" + "world")

const name = "Bibek"
const place = "Delhi"

//Traditional method
console.log(name + " lives in "+ place)

//Latest method
console.log(`Hello My name is ${name} and I live in ${place}. We will meet someday.`)

const gameName = new String('bibek')
console.log(`${gameName}`)  //bibek
console.log(`${gameName.length}`)  //5
console.log(`${gameName[0]}`)  //b
console.log(`${gameName.toUpperCase()}`);  //BIBEK
console.log(`${gameName.charAt(3)}`);  //e
console.log(`${gameName.indexOf('b')}`);  //0

const newName = new String("New-Game")
const newString = newName.substring(0,4)
const anotherString = newName.substring(2,6)
console.log(`${newString}`)  //New-
console.log(`${anotherString}`)  //w-Ga

/* substring takes 2 parameters (start, end).
It will include the start letter but will exclude the end. i.e (2,5) it will print 2nd,3rd and 4th index letters not the 5th index. (index starts from 0 not 1) */

const slicedString = newName.slice(-4,4)
console.log(`${slicedString}`)

const newStringOne = "    Bibek    "
console.log(newStringOne)  //    Bibek    
console.log(newStringOne.trim())  //removes trailing and leading spaces..  //Bibek

const url = "https://www.google.com/"
console.log(url.replace('google','yahoo'))  //https://www.yahoo.com/
console.log(url.includes('bibek'))  //false

const presentString = new String('bibek-basak-boy-delhi')

console.log(presentString.split('-'))  //[ 'bibek', 'basak', 'boy', 'delhi' ]