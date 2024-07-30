// const user = {
//     ключ:значення,
//     key:value
// }

// const user = {
//     name: "Volodymyr",
//     surname: "Pankiv",
//     age: 27,
// }

// console.log(user);

// user.name;
// console.log(user.name);
// console.log(user["name"]);

// user.name = "John";

// user.city = "New York";

// delete user.age;

// console.log(user);

// const user = {
//     name: "Volodymyr",
//     surname: "Pankiv",
//     age: 27,
//     friends: ["John", "Peter", "Oleksii"],
//     father: {
//         name: "John",
//         age: 66
//     }
// }

// console.log(user.friends)
// console.log(user.friends[1]);
// console.log(user.father.name);


// const user = {
//     name: "Volodymyr",
//     surname: "Pankiv",
//     age: 27,
//     sayHello: function(){
//         console.log("User said Hello");
//     }
// }


// user.sayHello();

// const user = {
//     name: "Volodymyr",
//     surname: "Pankiv",
//     age: 27,
//     sayHello: function(){
//         // console.log(`Hello from ${user.name}`);
//         console.log(`Hello from ${this.name}`);

//     }
// }


// user.sayHello();


// const user = {
//     name: "Volodymyr",
//     surname: "Pankiv",
//     age: 27,
// }


// user.sayHello();
// Object.keys()
// Object.values();

// console.log(Object.keys(user));
// console.log(Object.values(user));

// const user = {
//     name: "Volodymyr",
//     surname: "Pankiv",
//     age: 27,
// }


// console.log(user.hasOwnProperty("name"));
// console.log(user.hasOwnProperty("city"));

// function User(name, surname, age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// const user1 = new User("Volodymyr", "Pankiv", 27);
// const user2 = new User("Volodymyr2", "Pankiv2", 27);


// console.log(user1.name);

// console.log(user2.name);

// class User{
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }

//     sayHello() {
//         console.log(`Hello from ${this.name}`);
//     }
// }

// const user1 = new User("user1", 2424);
// const user2 = new User("user2", 2424);

// user1.sayHello();
// user2.sayHello();

// Наслідування
// Поліморфізм
// Інкапсуляція

// class Human {
//     constructor(name){
//         this.name = name;
//     }

//     talk() {
//         console.log("Talking....");
//     }
// }

// class Student extends Human{
//     study(){
//         console.log("styding...");
//     }
// }


// const student1 = new Student("Student1");

// console.log(student1.name);
// student1.study();
// student1.talk();


// class Human {
//     constructor(name){
//         this.name = name;
//     }

//     talk() {
//         console.log("Talking....");
//     }
// }

// class Student extends Human{
//     constructor(name, year){
//         super(name);
//         this.year = year;
//     }

//     study(){
//         console.log("styding...");
//     }
// }


// const student1 = new Student("Student1", 2000);

// console.log(student1.name);
// console.log(student1.year);
// student1.study();
// student1.talk();


// class Human {
//     constructor(name){
//         this.name = name;
//     }

//     talk() {
//         console.log("Talking as a Human...");
//     }
// }

// class Student extends Human{
//     constructor(name, year){
//         super(name);
//         this.year = year;
//     }

//     talk(){
//         super.talk();
//         console.log("Talking as a student...");
//     }
//     study(){
//         console.log("styding...");
//     }
// }


// const student1 = new Student("Student1", 2000);

// console.log(student1.name);
// console.log(student1.year);
// student1.study();
// student1.talk();


// Інкапсуляція

// публічні
// приватні

// захищені


// class User{
//     constructor(name){
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
    
//     set name(value){
//         if(value.length < 4){
//             alert("Name must be > 4 char");
//             return;
//         }
//         this._name = value;
//     }

// }

// const user1 = new User("user1");

// user1.name = "newCorrectName";


// console.log(user1.name);

