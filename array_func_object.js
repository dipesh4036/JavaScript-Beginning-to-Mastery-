// All About Array : typeof is object

// in Array forEach and for-of two loops are there but most common use of forEach but, for-of loop is ES6-2015 so,i choose for of loop
// String and array both are iterables , object is not iterable 
// when creating an any reference data type use only const 

// create arrays:

let mixed = [12,12.34,"Dipesh",null,undefined]
mixed[2]="Rahul"
console.log(mixed);

// some methods:  push , pop , shift , unshift

let fruits = ["mango","banana","grapes"]

fruits.push("apple")   // add last element
fruits.pop()           // remove last element

fruits.unshift("apple")  // add first element
fruits.shift()           // remove first element
console.log(fruits);

// clone array 
// clone array is improtant because of array is non primitive data type so, give refrence that's why cloneing is important 
let array1 = ["item1","item2"]
let array2 = [...array1,"item3"]
array1[1]="item3"
console.log(array1);
console.log(array2);

// loops in arrays:
let fruit = ["mango","banana","grapes","apple"]

// for of loop:
for (const i of fruit) {
    console.log(i);
}
// for in loop always give index  
for (const i in fruit) {
    console.log(fruit[i]);
}

// array destructuring:Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables
// in simple word object or array destucturing use for array or object value to convert variable 

let [val1, , val2]=fruit //value skip bi hota hai
let [value1, value2, ...newarr]=fruit // remaining convert into newarray
console.log(`val1 is: ${val1}`);
console.log(`val2 is: ${val2}`);


// Very Important Array Methods: for Each , map , reduce , filter

// for Each:

const number = [1,2,3,4,5,6]
number.forEach(element,index => {
    console.log(index ,element);
});

// Map function : use for in array element some number add,sub,multi,div,square like opraation 
number = [1,2,3,4,5,6]

const ans1 = number.map((num,index)=> `${index}:${num*2}`)
console.log(ans1);

// filter method:  use for to get some item or number  from array 
number = [1,2,3,4,5,6] 

const ans2 = number.filter((num)=>num%2===0)
console.log(ans2);

//reduce method: from array reduce item or number
number = [1,2,3,4,5,6,7,8,9,10]
const ans3 = number.reduce((acc,num)=>acc+num,0)
console.log(ans3);

// omst common use of reduce method in array inside object price value findout (json format)
const usercart = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:22000},
    {productId:3,productName:"tv",price:15000}
]

const ans4 = usercart.reduce((acc,object)=>acc+object .price,0)
console.log(ans4);

// Sort method:

const list1 = ["Dipesh","dipesh","rahul","Rahul","Aranv","aranv"]
console.log(list1.sort());

const list2 = [5,9,400,1200,4000]
console.log(list2.sort((a,b)=>a-b));  //for ascending order

const list3 = [5,9,400,1200,4000]
console.log(list3.sort((a,b)=>b-a));  //for deascending order

const products = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:22000},
    {productId:3,productName:"tv",price:15000}
]
console.log(products.sort((obj1,obj2)=>obj1.price-obj2.price))

// Find Method:  find which element you want 

const user1 = [
    {userId:1,userName:"Dipesh"},
    {userId:2,userName:"Rahul"},
    {userId:3,userName:"Vimal"},
    {userId:4,userName:"Ramesh"},
    {userId:5,userName:"Om"},
    {userId:6,userName:"Dhrumil"},
]

const answer = user1.find((user1)=>user1.userId===3);
console.log(answer);

// Every Method:  in given array each and every number check if it is even or not . if even then give true as output elas false

const wehavelist = [2,4,6,7,10]
const ans = wehavelist.every((num)=>num%2===0);
console.log(ans);

const product = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:22000},
    {productId:3,productName:"tv",price:15000}
]
const answer1 = product.every((item)=>item.price>30000);
console.log(answer1);

// some method:  in given array check if it is diff. number from other or not 

const ARR = [2,3,4,6]
const op = ARR.some((num)=>num%2===0); //check each number and find which one is odd number if it is odd number then give true 
console.log(op);

// Splice Method:  in give array any item delete or insert 
// start , delete , insert
const myarr = ["item1","item2","item3"]
myarr.splice(1,2,"inserted item2","inserted item3")
console.log(myarr); 

// Sets:  set is array like structure, set only hold unique values , set have no index-based access

// how to create sets:
const set = new Set([1,2,3,7,6,3,9,5])
// const set = new Set(["Dipesh","Rahul","vimal"])
console.log(set);

// sort and set
const jawab = [...set].sort((a,b)=>a-b);
console.log(jawab);

// Maps are also there like object learn YT

// ----------------------------------------------------------------------------------------------------------

// All About ojbect : typeof is object

// in object we use only for-in loop

// when creating an any reference data type use only const 

// create object:
const person = {
    name:"Dipesh",
    age:23,
    "person hobbies":["sleeping","music "]
}
console.log(person.name); //first method to access name
console.log(person?.name); // if name is not there so, give undefind
console.log(person["person hobbies"]); //second method to access name
// when some space are there then use bracket to access key:values

// one more example to easy to understand
const key = "email";  //i have one variable name key but i want to add email as a key how to do ?
person[key] = "dipeshsojitra@gmail.com"    // in bracket only i put variable name 
// person["email"]  understand like


person.gender = "male";  //first method how to other add key:values
person["gender"] = "male";  //second method how to other add key:values
console.log(person);


//Loops in object:  for in 
for (const key in person) {
    console.log(`${key} : ${person[key]}`);  // above example use f
}

// Computed Properties:
const key1 = "objvalue1"
const key2 = "objvalue2"
const myvalue1 = "myvalue1"
const myvalue2 = "myvalue2"

const obj = {
    [key1] : myvalue1,
    [key2] : myvalue2
}
console.log(obj);

// spread opertor in object:
const obj1 = {key1:"value1",key2:"value2"}
const obj2 = {key3:"value3",key4:"value4"}
const obj3 = {...obj1 , ...obj2}
console.log(obj3);


//object destucturing:Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables
// in simple word object or array destucturing use for array or object value to convert variable 
const bank = {
    "accountNo" : 12344,
    "name" : "Dipesh",
    "balance" : 3000
}
const {name , balance:bal} = bank    // here, we change variable name balance to bal 
console.log(bal); 

// nested destucturing: array inside object 

const user = [
    {userId:1,firstName:"Dipesh",gender:"male"},
    {userId:2,firstName:"ralu",gender:"female"},
    {userId:3,firstName:"vimal",gender:"male"},   
]
const[{userId:user1ID}, , {gender}] = user   // here, we change variable name userId to user1ID
console.log(user1ID);

// ----------------------------------------------------------------------------------------------------------

// All about Function:

// es5           and                 es6
// functon statements,                      fat arrow function
// function expressions,                           a) basic fat arrow
// anonymous function                              b) fat arrow with one param
//                                 c) fat arrow with implicit return

function abc(){
// function statment
}

var abc=function(){
// function expression                                  this is for es5
} 

// function(){
// // anonymous function
// }


var abc = () => {
// basic fat arrow
}


var abc = a => {
// fat arrow with one param
}
abc(12)

var abc = () => {
//fat arrow with implicit return
return 12;
}
console.log(abc())


// most inpotant thing is ... 

const sum = (num1,num2) => {
    return num1+num2 ;              // if scope is there then we write return keyword
}
console.log(sum(2,3));

const sum2 = (num1,num2) => num1+num2 ;     // but here no scope are there that's why we directly write sum No need to write return keyword
console.log(sum2(3,4));


// another most inpotant thing is ...  that's called "hoisting"

hello()
function hello(){
    console.log("hello world");       // in this case means (function statment) we call function above also
}

hello2()
const hello2 = function(){
    console.log("hello world");       // in this case means (function expression)  it gives an error 
}

// function inside function : 

function app() {
    const myfun = () => console.log("hello world");
    const sum = (num1,num2) => console.log(num1+num2);
    const mul = (num1,num2) => console.log (num1*num2);

    myfun()
    sum(3,4)
    mul(4,5)
}
app()

// param destructuring

const pepole = {
    firstName : "Dipesh",
    gender : "male",
    age : 23
}

function printDetails({firstName,age}){
    console.log(firstName);
    console.log(age);
}

// callback function: 

function myfun2(){
    console.log("inside my func 2");
}
function myfun1(callback) {
    callback();
}
myfun1(myfun2)
