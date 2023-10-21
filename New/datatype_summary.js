// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, bigint

const score = 100
const value = 50.6
const isLoggedIn = false
const Temperature = null
let email; // when values are not known in prior

const id1 = Symbol('123') // symbol
const id2 = Symbol('123')

console.log( id1 === id2 )

const bigNum = 975243975472547235424
const bigNumber = 975243975472547235424n //bigint (just add n at end of number)

//  Non primitive (Reference)

// Array, Objects, Functions

const heros = ["Thor", "Loki", "Hulk", "IronMan"]

let Obj = {
    name: "Anish",
    age: 18
}

const MyFunc = function(){
    console.log("Hello World");
}

//Finding out datatype
console.log(typeof Temperature); // object (because of null)

console.log(typeof MyFunc);

console.log(typeof heros);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/