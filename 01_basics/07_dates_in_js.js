//Dates

let myDate = new Date()
console.log(myDate)  //2025-04-20T14:14:02.424Z
console.log(myDate.toString())  //Sun Apr 20 2025 14:15:00 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toISOString())  
//2025-04-20T14:15:58.447Z
console.log(myDate.toLocaleDateString())  //4/20/2025
console.log(myDate.toLocaleString())  
//4/20/2025, 2:17:52 PM
console.log(myDate.toJSON())  //2025-04-20T14:17:52.000Z
console.log(myDate.toUTCString())
//Sun, 20 Apr 2025 14:18:42 GMT

console.log(typeof myDate)  //object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate)  //2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString())  
//Mon Jan 23 2023    0 -> Jan ....

let myCreatedDateTime = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateTime.toLocaleString())
// 1/23/2023, 5:03:00 AM

let customDate = new Date("2023-01-14")
console.log(customDate.toLocaleString())
// 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp)  //1745159302936 ms from Jan1,1970
console.log(myCreatedDate.getTime())  //1674432000000

//To convert ms into secs
console.log(Math.floor(Date.now()/1000))  //1745159483

console.log("************************")
let newDate = new Date()
console.log(newDate)  //2025-04-20T14:35:50.205Z
console.log(newDate.getDate())  //20
console.log(newDate.getDay())  //0
console.log(newDate.getFullYear())  //2025
console.log(newDate.getMonth() + 1)  //4
console.log(newDate.getTimezoneOffset())  //0