const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"

accountCity = "Jaipur"  //not recommendable

let accountState;

//accountId = 876  //not allowed

accountEmail = "hc@gmail.com"
accountPassword = "83733"
accountCity = "Delhi"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);


console.log("--------------------");
console.log("You can also write this as .....");
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

/*In Js, the only way to declare constant is by using const keyword, but to declare variables we have two keywords let and var.
But now we do not use var because there is a concept of scope (inside curlybraces {}). { } There occurred problems while using var inside scope{}.
Preferred not to use var because due to issue in block scope and functional scope.
Whenever we do not initialize a variable only declare it then Javascript considers its value as undefined.
*/




