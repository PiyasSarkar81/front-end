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