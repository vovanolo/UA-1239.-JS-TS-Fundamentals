// let x = 10;

// let y = 20;

// let z = x - y;

// z = 10 + x + y - 100 * 200 * 2.35;

// x = x ** 2;

// y = y ** 2;

// z = z + y + x + 200 ** 3;

// console.log(z);

// for(let i = 0; i <= 10; i++){
//     console.log(i);
//     if(i === 5){
//         break;
//     }

// }


// let counting = (function () {
//     let count = 0;
//     return {
//       value(n) {
//         if (n !== undefined) count = n;
//         return count;
//       },
//       increment() {
//         count++;
//         return coun;
//       },
//       decrement() {
//         count--;
//         return count;
//       },
//     };
//   })();
//   console.log(counting.value()); // 0
//   counting.increment();
//   counting.increment();
//   counting.increment();
//   console.log(counting.value()); // 3
//   counting.decrement();
//   counting.decrement();
//   console.log(counting.value()); // 1
//   console.log(counting.value(100)); // 100
//   counting.decrement();
//   console.log(counting.value()); // 99
//   console.log(counting.value(200)); // 200
//   counting.increment();
//   console.log(counting.value()); // 201


// let cat = 10;

// console.log(cet);

// console.lsg();

// sum();

// try{
// тут пишемо код який перевіряємо
// }catch(error){
// тут якщо трапилась помилка код буде працювати
// }

// try{
//     console.log("початок секціх try");
//     sum();
//     console.log("кінець секціх try");
// }catch(error){
//  console.log('код з секції catch');
// };

// try{
//     console.log("початок секціх try");
//     sum();
//     console.log("кінець секціх try");
// }catch(error){
// //  console.log('код з секції catch');
// // console.log(typeof error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// };

// як створити Помилку

// new Error("Трапилась Помилка");
// new TypeError("Невірний тип даних");
// new RangeError("Число поза допустимим діапазоном");

// як ініціювати що помилка трапилась

// throw

// try{
//     // let age = prompt("How old are you?");
//     // let age = 5;
//     let age = "safs";
//     if(age < 10){
//         throw new RangeError("Вік поза межами діапазону та < 10");
//     }else if(typeof age !== "number"){
//         throw new TypeError("Введено не число");
//     };

// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }

// class AgeError extends Error{
//     constructor(message){
//         super(message);
//         this.name = "AgeError";
//     }
// }

// try{
//     let age = prompt("How old are you?");
//     if(age < 18){
//         throw new AgeError("Wrong Age");
//     }
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }


// try{
//     setTimeout(function(){
//         console.log("hello");
//         sum();
//     },2000)
// }catch(error){
//     console.log("Error");
// }

// setTimeout(function(){
//     try{
//         sum();
//     }catch(error){
//         console.log("error")
//     }
// },2000)