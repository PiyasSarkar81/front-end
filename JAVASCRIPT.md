# JAVASCRIT
## Comments in JavaScript
There are two varieties of comments in JavaScript: 
 1. Single-line comments 
 2. Multi-line comments  

```js
// this is a Single-line comment!

/*
this
is
a
multi-line
comment
*/
```

## The semi-colon in JavaScript

* In JavaScript, the semi-colon - the `;` character - has a similar purpose: it is used to clearly delimit parts of the code from some other parts of the code.
* __Automatic Semi-Colon Insertion (ASI)__ - the browser has a feature known as "Automatic Semi-colon Insertion" - meaning, it does a pretty good job of "filling in the blanks" in case there is a missing semi-colon where there should be one.

## Output a greeting into the console
<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/OE_8TdFzQXOP_E3RcwFzXg_8b49e78ded554d63bc325a5d05fc13e1_console-log-authors-own-screenshot.png?expiry=1677110400000&amp;hmac=QpXNDX9KQA9Tv61i8NHLW9wz_V289xtTz5wYG5ls1bk" alt="Google Chrome DevTools open with the Console tab in focus, showing the command of console.log(&quot;Hello, World&quot;)" data-asset-id="OE_8TdFzQXOP_E3RcwFzXg" class="cml-image-default undefined">

If you add the %c right after the " character, you can then style the console output by adding the , character after the second ", and then, inside another pair of " and " characters, use valid CSS code to style the words you want to output in the console.
<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/QQw1d181QE-MNXdfNUBPhA_d303233cd4db486482f2f753479f74e1_console-log-with-percentage-c-authors-screeshot.png?expiry=1677110400000&amp;hmac=LF8b-zWHZdfmYfVWBgqaHPBmT67IDrptJY15akr_QwY" alt="console log with percentage c authors " data-asset-id="QQw1d181QE-MNXdfNUBPhA" aria-describedby="caption-QQw1d181QE-MNXdfNUBPhA" class="cml-image-default undefined">

## Output multiple words into the console
* Here is an example of joining three separate pieces of text: `console.log("Hello " + "there, " + "World")`. The output of this command will be: *Hello there, World.*
* Here is an example of outputting three separate pieces of text using the `,` character instead:
`console.log("Hello ", "there, ", "World")`
The output of this command will still be: *Hello there, World*.

## Operators in depth
## __1.Additional operators__
* Logical AND operator: `&&` 
* Logical OR operator: `||` 

* Logical NOT operator: `!` 

* The modulus operator: `%` 

* The equality operator: `==`

* The strict equality operator: `===`

* The inequality operator: `!=`

* The strict inequality operator: `!==`

* The addition assignment operator: `+=` 

* The concatenation assignment operator: `+=` (it's the same as the previous one - more on that later)

### __The logical AND operator in JavaScript: `&&`__
The logical AND operator is, for example, used to confirm if multiple comparisons will return true.

Here's a solution: 
```js
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
```
This means I can further re-write the line two of my solution as follows: `console.log(true && true);`

In other words: 
```js
console.log(true && true) will output: true 

console.log(true && false) will output: false 

console.log(false && true) will output: false 

console.log(false && false) will output: false
```

### __The logical OR operator in JavaScript: `||`__
It is used when you want to check if at least one of the given comparisons evaluates to `true`.
```js
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);
```
On line two, I console log the result of checking if either `currentTime < 9` or `currentTime > 17` will evaluate to `true`.
in other words:
```js
console.log(true || true) will output: true 

console.log(true || false) will output: true  

console.log(false || true) will output: true  

console.log(false || false) will output: false
```

### __The logical NOT operator: `!`__
You can think of the `!` operator as a switch, which flips the evaluated boolean value from `true` to `false` and from `false` to `true`.
```js
var petHungry = true;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);
```
Outputs:
```js
Pet is hungry: true
Feeding the pet
Pet is hungry: false
true
```
Here's how I could permanently change the value stored in the petHungry variable from true to false: 
```js
var petHungry = true;
petHungry = !petHungry;
```
### __The modulus operator: `%`__
The modulus operator is another mathematical operator in JavaScript. It returns the remainder of division.
```js
console.log(22 % 5); // 2
```
### __The equality operator, `==`__
* this comparison returns true: 5 == 5. Indeed, it is true that 5 is equal to 5.
*  the equality operator returning false:  5 == 6. Indeed, it is true that 5 is not equal to 6.
*  one of the compared values is of the number type, and the other is of the string type, the returned value is still true: 5 == "5". 
### __The strict equality operator, `===`__
* The strict equality operator compares for both the values and the data types.
* comparing `5 === 5` still returns `true`.However, comparing `5 == "5"` now returns `false`,
### __The inequality operator, `!=`__
* The inequality operator checks if two values are not the same, but it does not check against the difference in types.
* `5 != "5"` returns `false`, because it's false to claim that the number 5 is not equal to number 5, even though this other number is of the string data type.
### __The strict inequality operator `!==`__
* For the strict inequality operator to return `false`, the compared values have to have the same value and the same data type. 
* `5 !== 5` returns `false` because it is false to say that the number 5 is not of the same value and data type and another number 5.
* comparing the number 5 and the string 5, using the strict inequality operator, returns `true`.
## __2. Using the + operators on strings and numbers__
* The + operator, when used with number data type, adds those values together.
*  the + operator is also used to join string data type together.
```js
"inter" + "net" // "internet"
"note" + "book" // "notebook"
```
* If the + operator is used to join strings, then it is referred to as the *concatenation* operator, and you'll say that it's used to *concatenate* strings.
* When used with numbers, the `+` operator is the `addition operator`, and when used with strings, the + operator is the `concatenation operator`.
### __Combining strings and numbers using the `+` operator__
```js
365 + " days" // "365 days"
12 + " months" // "12 months"
```
JavaScript tries to help by converting the numbers to strings, and then `concatenating the number and the string together`, ending up with a `string value`.
### __The addition assignment operator, `+=`__
The addition assignment operator is used when one wants to accumulate the values stored in a variable.
```js
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9
```
You can simplify the above code by using the addition assignment operator, as follows:
```js
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9
```
### __The concatenation assignment operator, `+=`__
```js
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."
```
### __Operator precedence and associativity__
* Operator precedence is a set of rules that determines which operator should be evaluated first.
```js
1 * 2 + 3
```
The result of the above code is 5, because the multiplication operator has precedence over the addition operator.

Operator associativity determines how the precedence works when the code uses operators with the same precedence.
* left-to-right associativity

* right-to-left associativity
For example, the assignment operator is right-to-left associative, while the greater than operator is left-to-right associative:
```js
var num = 10; // the value on the right is assigned to the variable name on the left
5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`
```

## Conditional examples
### __if...else__
```js
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}
```
### __switch...case__
```js
//converting the previous if-else example with switch-case
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
       break;
}
```
### __LOOPS__
__for loops & While loops__
```js
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}
```
#### __uses of loop__
`Note: In order to have the styles applied, try running this code snippet in your browser's console`.

That's it, with this simple code, the output in the console shows each letter on a separate line, styled like a letter cube for toddlers.

The code itself should be mostly familiar, except for the `cubes.length` and the `cubes[i]` syntax.

Without getting into too many details, here are both code snippets explained as simple as possible.

The `cubes.length` returns a number. Since `cubes` is a string of characters the `cubes.length` gives me the length of the string saved in the variable.
```js 
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
```
<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/80UV44AjRfe3wSiZ5hrO3Q_cc31ca26763041eb84d824c6facbeca1_console-output-1.png?expiry=1677196800000&amp;hmac=Br7t0fqljaAb-cQF-tKGa3F3ABdrpUQtFMXvEKr5TSs" alt="Styling console output" data-asset-id="80UV44AjRfe3wSiZ5hrO3Q" class="cml-image-default undefined">

The second piece of code that's new here is the `cubes[i]` snippet.

This simply targets each individual letter in the loop, based on the current value of the i variable.

In other words, `cubes[i]`, when `i` is equal to `0`, is: `A`.

Then, `cubes[i]`, when `i` is equal to `1`, is: `B`.

This goes on for as many loops my for loop runs - and this is determined by the `cubes.length` value.

It's also very versatile, since, if I, for example, decided to change the length of the `cubes` string, I would not have to update the condition of `i < cubes.length`, because it gets automatically updated when I change the length of the `cubes` string.

There are some other ways to store data in JavaScript apps that you haven't heard about.

But we can use the same approach with those other kinds of data, to achieve results that essentially work on the same principle as the one just described.

Using loops is the essence of the approach taken in developing many different pieces of functionality in software today.

Some more specific examples include:

* looping over blog post titles in some structured data, and displaying each blog post title on a blog home page

* looping over social media posts in some structured data, and displaying each social media post based on some conditions

* looping over some structured data on clothing available for sale in an online clothing store, and displaying relevant data for each item of clothing

## Building and calling functions
```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
```

Output:
```
1 'red'
2 'orange'
3 'yellow'
4 'green'
5 'blue'
6 'purple'
7 'pink'
```
## Object Literals and the Dot Notation
It essentially consists of two steps: 

1. Declaring a new variable and assigning an object literal to it - in other words, this: `var assistantManager = {}` 

2. Assigning the values to each of the object's keys, using the assignment operator, `=`

```js
//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
```
To access the `assistantManager` object, I can simply console log the entire object:  
```js
console.log(assistantManager);//display the object in the developer console
```
The returned value is the entire table object:  
```js
{
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
```
Additionally, I can console log any individual property, like this:  
```js
console.log(assistantManager.health); // 30
```
An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties; for example:
```js
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
```
## Object Literals and the Brackets Notation
```js
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
```
 there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.
 ```js
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
 ```
 *Output*:
 ```
100
200
red
 ```
 Using the fact that brackets notation can evaluate expressions, I accessed the `arrOfKeys[i]` property on the `drone` object. 

This value changed on each loop while the for loop was running.

Specifically, the first time it ran, it was evaluated like this: 

* The value of `i` was `0`

* The value of `arrOfKeys[i]` was `arrOfKeys[0]`, which was `"speed"` 

* Thus, `drone[arrOfKeys[i]]` was evaluated to `drone["speed"]` which is equal to `100`

This allowed me to loop over each of the values stored inside the `drone` object, based on each of its properties' keys.

## Object Methods
```js
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
```

## Arrays are Objects
* Explain that arrays are objects, with their own built-in properties and methods

* Outline the common way to extend arrays using the `push()` method

* and explain how to trim the last member of an array using the `pop()` method
```js
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum');

console.log(simpleArr); // ['apple','pear','plum']
```
## Math object cheat sheet
### __Number constants__
* The PI number: `Math.PI` which is approximately 3.14159

* The Euler's constant: `Math.E` which is approximately 2.718

* The natural logarithm of 2: `Math.LN2` which is approximately 0.693
### __Rounding methods__
* `Math.ceil()` - rounds up to the closest integer 

 * `Math.floor()` - rounds down to the closest integer 

* `Math.round()` - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
* `Math.trunc()` - trims the decimal, leaving only the integer
### __Arithmetic and calculus methods__
* `Math.pow(2,3)` - calculates the number 2 to the power of 3, the result is 8 

* `Math.sqrt(16)` - calculates the square root of 16, the result is 4 

* `Math.cbrt(8)` - finds the cube root of 8, the result is 2 

* `Math.abs(-10)` - returns the absolute value, the result is 10 

* Logarithmic methods: `Math.log(), Math.log2(), Math.log10()` 

* Return the minimum and maximum values of all the inputs: `Math.min(9,8,7)` returns `7`, `Math.max(9,8,7)` returns `9`.

*  Trigonometric methods: `Math.sin(), Math.cos(), Math.tan()`, etc.

## String cheat sheet

```js
var greet = "Hello, ";
var place = "World"
greet.length; // 7
greet.charAt(0); // 'H'
"Wo".concat("rl").concat("d"); // 'World'
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "
```

## Syntax, logical and runtime errors
### __ReferenceError__
A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.
```js
console.log(username);
// Output : Uncaught ReferenceError: username is not defined
```
### __SyntaxError__
Any kind of invalid JavaScript code will cause a SyntaxError.
```js
var a "there's no assignment operator here";
// Output : Uncaught SyntaxError: Unexpected string
```
it cannot be caught using the `try-catch` block.
### __TypeError__
A TypeError is thrown when, for example, trying to run a method on a non-supported data type.
```js
"hello".pop() // Uncaught TypeError: "hello".pop is not a function
```
### __RangeError__
```js
(10).toString(2); // '1010'
(10).toString(8); // 12
```
* The value of `2` when passed to the `toString()` method, is like saying to JavaScript: "convert the value of 10 of the Base `10` number system, to its counter-part in the Base `2` number system".
* I get back the value 12, which is the plain number 10, writen in Base 8 number system.

However, if I try to use a non-existing number system, such as an imaginary Base 100, since this number system effectively doesn't exist in JavaScript, I will get the RangeError, because a non-existing Base 100 system is `out of range` of the number systems that are available to the `toString()` method:
```js
(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
```



## The functional programming paradigm
"There are actually several styles of coding, also known as paradigms. A common style is called functional programming, or FP for short.

Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.

OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - meaning, the properties and methods "belong together".

### __First-class functions__
* pass to other functions
* save in a variable
* return from other functions
```js
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())
```

__This works because functions in JavaScript are truly first-class citizens, which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc.__

### __Higher-order functions__
* It accepts other functions as arguments
* It returns functions when invoked
```js
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
```

### __Pure functions and side-effects__
A pure function returns the exact same result as long as it's given the same values.
```js
function addTwoNums(a, b) {
    console.log(a + b)
}
addTwoNums(5,6); // 11
```
## Object Oriented Programming principles
### __The Benefits of OOP__
OOP helps developers to mimic the relationship between objects in the real world. 

* Allows you to write modular code,

* Makes your code more flexible and

* Makes your code reusable. 

### __The Principles of OOP__
The four fundamental OOP principles are `inheritance`, `encapsulation`,` abstraction` and` polymorphism`.
 
 creating obbjects from classes is to use the new  keyword. When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.
```js
class Animal { /* ...class code here... */ }

var myDog = new Animal()

console.log (myDog)
```

### __OOP Principles: Inheritance__
In essence, it's a very simple concept. It works like this: 

1. There is a base class of a "thing".

2. There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")

3. There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

*Note:* that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

To setup the inheritance relation between classes in JavaScript, I can use the `extends` keyword, as in `class B extends A`.
```js
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }
```
### __OOP Principles: Encapsulation__
In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.
```js
"abc".toUpperCase();
```
I don't really need to worry or even waste time thinking about how the `toUpperCase()` method works. All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is, the implementation of the `toUpperCase()` method changes - as long as it doesn't break my code, I don't have to worry about what it does in the background, or even how it does it.

### __OOP Principles: Abstraction__
Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms: 

* An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

* Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

### __OOP Principles: Polymorphism__
Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

So, to understand what polymorphism is about, let's consider some real-life objects.

* A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

* Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

```js
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
```
So, I can access the `bell()` method on the `bicycle` object, using the following syntax: 
```js
bicycle.bell(); // "Get away, please"
```
I can also access the `bell()` method on the `door` object, using this syntax:  
```js
door.bell(); // "Come here, please"
```
At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.

Now, to make this code truly polymorphic, I will add another function declaration:
```js
function ringTheBell(thing) {
    console.log(thing.bell())
}
```
Now I have declared a `ringTheBell()` function. It accepts a `thing` parameter - which I expect to be an object, namely, either the `bicycle` object or the `door` object.

So now, if I call the `ringTheBell()` function and pass it the `bicycle` as its single argument, here's the output:
```js
ringTheBell(bicycle); // Ring, ring! Watch out, please!
```
However, if I invoke the `ringTheBell()` function and pass it the `door` object, I'll get the following output:
```js
ringTheBell(door); // "Ring, ring! Come here, please!"
```
Here's an example of polymorphism using classes in JavaScript:
```js
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"w
```
The `Penguin` and `Eagle` sub-classes both inherit from the `Bird` super-class. The `Eagle` sub-class inherits the `useWings()` method from the `Bird` class, but extends it with an additional console log. The `Penguin` sub-class doesn't inherit the `useWings()` class - instead, it has its own implementation, although the `Penguin` class itself does extend the `Bird` class.  
## Constructors
JavaScript has a number of built-in object types, such as:

 `Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON,` etc.

These objects are sometimes referred to as "native objects".

Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.

To use a constructor function, I must prepend it with the operator `new`.

For example, to create a new instance of the `Date` object, I can run: `new Date()`. What I get back is the current datetime, such as:

`Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time)` 

However, not all the built-in objects come with a constructor function. An example of such an object type is the built-in `Math` object.

Running `new Math()` throws an `Uncaught TypeError`, informing us that `Math is not a constructor`.

Thus, I can conclude that some built-in objects do have constructors, when they serve a particular purpose: to allow us to instantiate a specific instance of a given object's constructor. The built-in `Date` object is perfectly suited for having a constructor because each new date object instance I build should have unique data by definition, since it's going to be a different timestamp - it's going to be built at a different moment in time.

Other built-in objects that don't have constructors, such as the `Math` object, don't need a constructor. They're just static objects whose properties and methods can be accessed directly, from the built-in object itself. In other words, there is no point in building an instance of the built-in `Math` object to be able to use its functionality.

For example, if I want to use the `pow` method of the `Math` object to calculate exponential values, there's no need to build an instance of the `Math` object to do so. For example, to get the number 2 to the power of 5, I'd run:

`Math.pow(2,5); // --> 32`

There's no need to build an instance of the `Math` object since there would be nothing that needs to be stored in that specific object's instance.

Besides constructor functions for the built-in objects, I can also define custom constructor functions.

Here's an example:
```js
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
```
I've just built two instance objects of `Icecream` type.

The most common use case of `new` is to use it with one of the built-in object types.

Note that using constructor functions on all built-in objects is sometimes not the best approach.

This is especially true for object constructors of primitive types, namely: `String`, `Number`, and `Boolean`.

For example, using the built-in `String` constructor, I can build new strings:
```js
let apple = new String("apple");
apple; // --> String {'apple'}
```
The `apple` variable is an object of type `String`.

Let's see how the `apple` object differs from the following `pear` variable:
```js
let pear = "pear";
pear; // --> "pear"
```
The `pear` variable is a string literal, that is, a primitive Javascript value.

The `pear` variable, being a primitive value, will always be more performant than the `apple` variable, which is an object.

Besides being more performant, due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, even when their values are identical.

In other words, if you compare `new String('plum') === new String('plum')`, you'll get back `false`, while `"plum" === "plum"` returns `true`. You're getting the `false` when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.

Besides not using constructors to build object versions of primitives, you are better off not using constructors when constructing plain, regular objects.

Instead of `new Object`, you should stick to the object literal syntax: `{}`.

A `RegExp` object is another built-in object in JavaScript. It's used to __pattern-match strings__ using what's known as "Regular Expressions". Regular Expressions exist in many languages, not just JavaScript.

In JavaScript, you can built an instance of the RegExp constructor using `new RegExp`. 

Alternatively, you can use a pattern literal instead of RegExp. Here's an example of using /d/ as a pattern literal, passed-in as an argument to the `match` method on a string.
```js
"abcd".match(/d/); // null
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]
```
Instead of using Array, Function, and RegExp constructors, you should use their array literal, function literal, and pattern literal varieties: `[]`, `()` `{}`, and `/()/`.

However, when building objects of other built-in types, we can use the constructor.

Here are a few examples:
```js
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
```
## Creating classes

```js
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //
```

In this example, there are three classes defined: `StationaryBike`, `Treadmill`, and `Gym`.

The `StationaryBike` class is coded so that its future object instance will have the `position` and `gears` properties. The `position` property describes where the stationary bike will be placed inside the gym, and the gears propery gives the number of `gears` that that stationary bike should have.

The `Treadmill` class also has a position, and another property, named `modes` (as in "exercise modes").

The `Gym` class has three parameters in its constructor function: `openHrs, stationaryBikePos, treadmillPos`.

This code allows me to instantiate a new instance object of the `Gym` class, and then when I inspect it, I get the following information:

* the `openHrs` property is equal to `"7-22"` (that is, 7am to 10pm)

* the `stationaryBike` property is an object of the `StationaryBike` type, containing two properties: `position` and `gears`

* the `treadmill` property is an object of the `Treadmill` type, containing two properties: `position` and` modes`
## Default Parameters
```js
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
```

This approach improves the developer experience of my code, because I no longer have to worry about feeding the `WithDefaultParameters` class with all the arguments. For quick tests, this is great, because I no longer need to worry about passing the proper arguments.

```js
class Animal {
    constructor(color = 'yellow', energy = 100) { // constructor: color, energy
        this.color = color;
        this.energy = energy;
    }
    isActive() {// isActive()
        if(this.energy > 0) {// if energy > 0, energy -=20, console log energy
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){// else if energy <= 0, sleep()
            this.sleep();
        }
    }
    sleep() {// sleep()
        this.energy += 20; // energy += 20
        console.log('Energy is increasing, currently at:', this.energy)   // console.log energy
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal { // constructor: sound, canJumpHigh, canClimbTrees, color, energy
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {  // makeSound()
        // console.log sound
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {      // constructor: sound, canFly, color, energy
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {  // makeSound()
        console.log(this.sound);  // console.log sound
    }
}

class HouseCat extends Cat {  
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) { // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) { // makeSound(option)
        if (option) {  // if (option)
            super.makeSound();  // super.makeSound()
        }
        console.log(this.houseCatSound); 
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) { // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) { // makeSound(option)
        if (option) { // if (option)
            super.makeSound(); // super.makeSound()
        }
        console.log(this.tigerSound); // console.log(tigerSound)
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) { // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) { // makeSound(option)
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) { // if (canTalk)
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!
```

## For of loops and objects
```js
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
/* Output
red
orange
yellow
*/
```
```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
// [ ['speed', 400], ['color', 'magenta'] ]
```
To summarise, you learned that you can loop over arrays using the `for of` loop.  You also learned that you can extract object's keys, values, or both, using the `Object.keys()`, `Object.values()` and `Object.entries()` syntax.

You now have all the ingredients that you need to __loop over any object's own property keys and values__.

```js
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}
```


## Additional resources

[Comporison Operations](https://www.javascripttutorial.net/javascript-comparison-operators/)

[Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

[Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

[Conditional Statements](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

[Conditional (Ternary) Operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

[Javascripts Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

[JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

[Javascript typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

[Javascript Array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

[function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

[try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

[Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

[JavaScript error reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

[Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

[Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

[Functional Programming: JavaScript](https://www.toptal.com/javascript/functional-programming-javascript)

[First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

[constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[The Flavors of Object-Oriented Programming](https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/)

[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)