let score1 = "11"
let score2 = "11aa"

let valueInNumber1 = Number(score1)
// console.table([score1, typeof score1, typeof valueInNumber1, valueInNumber1]) //typeof(score)

let valueInNumber2 = Number(score2)
// console.table([score2, typeof score2, typeof valueInNumber2, valueInNumber2])

// "11" = 11
// "11aa" = NaN

let score = true
let value = Number(score)
// console.table([score, typeof score, typeof value, value])

// true = 1 & false = 0

let num = 11
let val = String(num)
// console.table([num, typeof num, typeof val, val])

let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
// console.table([isLoggedIn1, typeof isLoggedIn1, typeof booleanIsLoggedIn1, booleanIsLoggedIn1])

let isLoggedIn2 = 0
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.table([isLoggedIn2, typeof isLoggedIn2, typeof booleanIsLoggedIn2, booleanIsLoggedIn2])

// 1 = true & 0 = false

let isLoggedIn3 = "hai"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
// console.table([isLoggedIn3, typeof isLoggedIn3, typeof booleanIsLoggedIn3, booleanIsLoggedIn3])

let isLoggedIn4 = ""
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
// console.table([isLoggedIn4, typeof isLoggedIn4, typeof booleanIsLoggedIn4, booleanIsLoggedIn4])

// "hai" = true & "" = false

/* Opertaions 

( 2+2, 2-2, 2*2, 2**2, 2/2, 2%2 )

*/

let str1 = "hai"
let str2 = "Anish"

let str = str1 + str2
//console.log(str);

/*console.log(1 + "2");
console.log("2" + 1);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(("2" - 1),("2" * 2),(2 / "1"));*/

/*console.log((+true),(true));
// console.log(true+); //error
console.log(+""); */

let num1, num2, num3 
 num1 = num2 = num3 = 2+2; //possible (not a good way of writing code)

let gameCounter = 100;
num = ++gameCounter;
console.log(num);