// alert("hello"); 
// // comment here
// console.log("Hello world!"); // console.log


// console.log("Hello world!"); 


// змінні
// let const var

// let message = "Hello World!";

// message = "hello guys";

// console.log(message);


// const message = "hello guys";

// message = "hello";

// number
// string
// boolean
// null
// undefined
// object

// 24245325
// "sfsfeg353535   "

// true false

// let message;

// message = null;

// console.log(message);

// const user = {
//     name: 'Volodymyr',
//     age: 45,
//     city: null
// }

// let number = 5;

// number = "hello";

// let number1 = 1;
// let number2 = 2;

// number1 = number2;

// alert("hello");

// alert(5);

// let name = prompt("Whats your name?");

// alert(name);
// alert("Hello " + name);
// alert(`Hello ${name}`);

// + - * / %

// console.log(5 + 5);

// let number1 = 1;
// let number2 = 2;

// console.log(number1 + number2);
// console.log(number1 - number2);

// let number = 5;

// number = number + 1;

// number++;
// number--;

// number += 1; //6
// number += 5; // 10
// number -= 1
// number *= 2;
// number /= 2;

// console.log(2 ** 4)



// Math.pow(2, 4)
// Math.sqrt(25);

// console.log("5" + "1"); "51"

// console.log("hello" + 'sfs');
// console.log(5 - "1");


// console.log(10 == 10);
// console.log(10 == 11);
// console.log(10 > 11);
// console.log(10 < 11);

// console.log(10 >= 10);
// console.log(10 <= 10);





// == - не строга рівність

// console.log(10 == 10);
// console.log(1 == true);
// 0 - false
// 1 - true
// "" - false
// "sfsf" - true

// === - строга рівність !!!!

// console.log(1 === true);
// console.log(1 === 1);

// let number = -1;


// // console.log(number > 0 && number < 10);

// console.log(number < 0 || number > 10);

//  !
// let x = true

// x = !x;

// const age = Number(prompt("How old are you?"));

// let result = (age > 18) ? "you adult" : "you young";

// console.log(result);

// let number = 5;

// console.log(typeof(number));

// let message = "5";

// let number = Number(message)

// console.log(typeof(number));

// if

// switch

// const age = Number(prompt("How old are you?"));

// if (age > 18){
//     console.log('you adult');
// }

// if (age > 18){
//     console.log('you adult');
// }else{
//     console.log("u are too young");
// }


// if (age > 20 && age < 30){
//     console.log("age is 20-30");
// } else if(age > 30 && age < 40){
//     console.log("age is 30-40");
// }else if(age > 40 && age < 50){
//     console.log("age is 40-50");
// }else{
//     console.log("out of range");
// }


// switch(age){
//     case 20: // age === 30
//         console.log("you are 20");
//         break;
//     case 30:
//         console.log("you are 30");
//         break;
//     default:
//         console.log("unknown age");
//         break;
// }

// switch(true){
//     case (age > 20 && age < 30): // true === true
//         console.log("age is 20-30");
//         break;
//     case (age > 30 && age < 40):
//         console.log("age is 30-40");
//         break;
// }


// Loops Arrays Functions

// const name = "hello";


// ["Ivan", "Petro", 3434,35,353, true, false]

// const / let

// const students = ["Ivan", "Max", "Anna"];

// Object

// const students = ["Ivan" - 0, "Max" - 1, "Anna" - 2];


// const students = ["Ivan", "Max", "Anna"];
// studets[0]

// console.log(students[0]);
// console.log(students[1]);

// students[0] = "Volodymyr";

// students[3] = "John";

// students[7] = "Rudi";

// console.log(students[5]);


// console.log(students.length);

// students.push("John", "Rudi");

// students.pop();

// students.unshift("Volodymyr");

// students.shift();

// splice

// const students = ["Ivan", "Max", "Anna"];

// students.splice(1, 1, "Volodymyr");

// console.log(students);


// console.log(0);
// console.log(1);

// console.log(2);

// while for for of for in

// let i = 1; //2 3 4 5 6 7 8 9 10

// while(i <= 9){
//     console.log(i); // 1 2 3 4 5 7 8 9
//     i++;
// }

// for(let i = 1; i <= 9; i++){
//     console.log(i);
// }


// for(let i = 2; i <= 10; i+= 2){
//     console.log(i);
// }

// for(let i = 10; i >= 0; i-= 1){
//     console.log(i);
// }

// const students = ["Ivan", "Max", "Anna"];

// students[0];

// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

// break
// continue

// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
//     if(students[i] === "Max"){
//         break;
//     }
// }


// for(let i = 0; i < students.length; i++){
//     if(students[i] === "Max"){
//         continue;
//     }
//     console.log(students[i]);
// }

// for of
// for in

// const students = ["Ivan", "Max", "Anna"];


// for (let student of students){
//     console.log(student);
// }

// for (let index in students){
//     // console.log(index);
//     console.log(students[index]);
// }

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();


// function sum(a, b) {
//     console.log(a + b);
// }

// sum(10, 20);
// sum(20, 50);
// sum(2, 2);

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(2,2);

// console.log(result);

// console.log(sum(3,4));

// sum(2,2,23,4,5,6,7,5,4,3,2,3,45,6)


// function sum(){
//     // console.log(arguments);
//     let result = 0;
//     for(let number of arguments){
//         result += number;
//     }
//     return result;
// }


// console.log(sum(2,4,5,35));

// function declaration
// function expression

// declaration();

// function declaration(){
//     console.log("declaration");
// }

// expression();


// let expression = function(){
//     console.log("expression");
// }


// forEach map reduce find filter ...



// const students = ["Ivan", "Max", "Anna"];


// students.forEach(function(element, index){
//     // console.log(element);
//     console.log(index);
// })

// let newStudents = students.map(function(element, index){
//     return element + "2";
// })

// console.log(newStudents);

// function modify(array){
//     // let newArray = array.map(function(element){
//     //     return element + 10;
//     // })
//     // return newArray

//     return array.map(function(element){
//         return element + 10;
//     }
   
// }

// console.log(modify([1,2,3,4,5,6]));\


// 'іавпвп " dfdf" '