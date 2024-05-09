const name = "anish"
const repoCount = 50

// console.log(name + repoCount + " Value"); //dont use + instead use the following

console.log(`Hello, ${name}! the repo count is ${repoCount}`); //use ``(back ticks) with ${} for variables

const iName = new String('Rupert') // decalre using new keyword (another Sytax)
console.log(iName);

// in browser we get
/* 
String {'Rupert'}
0: "R"
1: "u"
2: "p"
3: "e"
4: "r"
5: "t"
length: 6
[[Prototype]]: String
[[PrimitiveValue]]: "Rupert" 
*/

console.log(iName[0]);
console.log(iName.__proto__); 
//access syntax using __proto__(it'll give {}(object) but it's not empty)

console.log(iName.toUpperCase()); //can use directly without writing __proto__
console.log(iName.charAt(2)); // find char at position 2
console.log(iName.indexOf('t')); //find index of char

console.log(iName.substring(0, 4)); // (start, end), prints Rupe from 0 to 3, 4 is not included

