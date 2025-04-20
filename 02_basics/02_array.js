const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes)
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heroes[3])  //[ 'superman', 'flash', 'batman' ]
console.log(marvel_heroes[3][1])  //flash

const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes)   
/*
[
  'thor',
  'Ironman',
  'spiderman',
  'superman',
  'flash',
  'batman'
]
*/

//Another way is using spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)
/*
[
  'thor',
  'Ironman',
  'spiderman',
  'superman',
  'flash',
  'batman'
]
*/

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]]

const usable_arr = another_array.flat(Infinity)
console.log(usable_arr)
/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 4,
  5
]
*/

console.log(Array.isArray("Bibek"))  //false
console.log(Array.from("Bibek"))  //[ 'B', 'i', 'b', 'e', 'k' ]
console.log(Array.from({name : "Bibek"}))  //[]

let score1 = 100;
let score2 = 1000;
let score3 = 609;

console.log(Array.of(score1, score2, score3))
//[ 100, 1000, 609 ]