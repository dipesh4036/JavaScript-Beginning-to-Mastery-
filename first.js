"use strict"; // Defines that JavaScript code should be executed in "strict mode".

// variables: let , var , const

// Data Types:
// 1) primitive: Number , String , Boolean , null , undefined
// 2) not primitive: Array [] , Function  () , Object  {}    ==> reference data  

// String indexing:
let name = "Dipesh"
console.log(name[0]); // first char
console.log(name[name.length-1]);  //last char 

// String Usefull Methods: trim(),toUpperCase(),toLowerCase(),slice()
let a = "  Dipesh  "
console.log(a.trim());
console.log(a.trim().toUpperCase());
console.log(a.trim().slice(0,3));


// what is NaN in JS:
// NaN is also onw type of number
console.log(`NaN type is: ${typeof NaN}`);


// convert string to number 

let name1 = "10"
// first trick
+"10"
console.log(typeof name1);
// second trick
Number(name1)


//  convert number to string 
let name2 = 10
// first trick
10+" "
console.log(typeof name1);
// second trick
String(name1)

// undefined and null
let firstname;
console.log(typeof firstname);

let secondname = null;
console.log(typeof secondname);   // here type is object this is bug 


// diff between == and === in js
// == Loose equality comparison (not type check)
// === Strict equality comparison (check type also)
1 == "1" // true
1 === "1" // false
1 == 1 // true
1 === 1 // true
NaN == NaN // false
NaN === NaN // false
null == undefined // true
null === undefined // false


// turely and Flasy values:
//null undefined NaN 0 " "  ' ' document.all -> Flasy
// baaki sab truthy                          -> turely


// user input
+prompt("enter number")  // promt is always take "string" that why we convert first string to number