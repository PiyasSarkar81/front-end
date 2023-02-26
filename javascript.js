console.log("Hello World");
//Output: Hello World

console.log("%cHello, World", "color: blue; font-size: 40px");
//OutPut: Hello, World

console.log("Hello " + "There, " + "World");
//Output: Hello There, World

console.log("Hello ", "there, ", "World")
// Output: Hello  there,  World

/*
Arithmetic operator in JS:
+ addition
- substraction
* mutiplication
/ divition
*/

/*
Logical operation in JS:
< less then
> greater then 
*/

console.log(3+4+7)
console.log(7-4)
console.log(4*2)
console.log(9/2)
console.log(9<4)
console.log(9>4)
console.log(10 == 10)

// exponent
console.log(2**8)
//modulus
console.log(9%2)

// strict equality operator (value & type)
console.log(100==="100")
console.log(100===100)


// conditional statement 
var result = 50

if(result > 40){
    console.log("You pass the test.");
}
else{
    console.log("You fail the test")
}

//else if
var place = "first"

if(place == "first"){
    console.log("Gold")
}else if(place == "second"){
    console.log("Silver")
}else if (place == "third"){
    console.log("Bronze")
}
else{console.log("No medel")}

//switch case
var  place1 = 'second'
switch( place1){
    case 'first' : 
    console.log("Gold")
    break;
    case 'second':
    console.log("Silver")
    break;
    case 'third':
    console.log("Bronge")
    break;
    default:
        console.log("No medel")
}
//single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
}
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}


// function declaration
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

// randum integer
// get a arndum decimel number between 0 and 0.99... and save it to a variable
var decimal = Math.random()*10;
// Round up the value of the decimal
var rounded = Math.ceil(decimal)
// log the valu of the decimal to the console
console.log(rounded);

//concat method
var name = ' Lisa'
var gritting = 'Hello'
console.log(gritting.concat(name) )

// 'typeof' operator
var test = typeof(3<8);
console.log(test)

// Error handaling (try...catch)
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")

// function return statement
function doubleIt(a){
    console.log(2*a)
    return 2*a; // return the val
}
var d = doubleIt(3);
console.log(d);

// functional paradime
var shoes = 100;
var stateTax = 1.2;
function totalPrise(product,tax){
    return product*tax;
}
var toPay = totalPrise(shoes,stateTax);
 console.log(toPay);

 // for of loops and objects
 const car ={
    engine : true
 }
 const sportsCar = Object.create(car)
sportsCar.speed = "fast";
console.log("Sports car objects" ,sportsCar);
for(prop in sportsCar)
{
    console.log(prop)
}
for(prop of Object.keys(sportsCar)){
    console.log(prop + ' : '+ sportsCar[prop]);
}

// JS DOM Manipulation

// const h2 = document.createElement('h2')
// undefined
// h2.innerText = "This is an h2 heading"
// "This is an h2 heading"
// h2.setAttribute('id', 'sub-heading')
// undefined
// h2.setAttribute('class', 'secondary')
// undefined
// h2
// <h2 id="sub-heading" class="secondary">
// document.body.appendChild(h2)
// <h2 id="sub-heading" class="secondary">