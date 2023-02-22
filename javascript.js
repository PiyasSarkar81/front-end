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