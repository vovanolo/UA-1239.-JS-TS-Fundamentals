// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// })

// console.log(3);

// function sum(a,b){
//     return a + b;
// }

// sum(1,2);

// function sum(a,b){
//     return new Promise((resolve, reject) => {
//         resolve(a + b);
//     })
// }

// // console.log(sum(2,3));
// sum(2,3).then(result => {
//     console.log(result);
// })

// function sum(a,b){
//     return new Promise((resolve, reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }else{
//             reject("Error a < 0");
//         }
//     })
// }

// sum(-2,3).then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// })

// sum(-2,3).then(result => {
//             console.log(result);
//         }, error => {
//             console.log(error);
//         }) 



// function sum(a,b){
//     return new Promise((resolve, reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }else{
//             reject("Error a < 0");
//         }
//     })
// }

// sum(2,2).then(result => {
//     // console.log(result);
//     return result + 2;
// }).then(result => {
//     // console.log(result);
//     return result * 2;
// }).then(result => {
//     console.log(result);
// })

// function sum(a,b){
//     return new Promise((resolve, reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }else{
//             reject("Error a < 0");
//         }
//     })
// }

// sum(2,2).then(result => {
//     // console.log(result);
//     // return sum(4,4);
//     return new Promise(resolve=>{
//         resolve(10);
//     })
// }).then(result => {
//     console.log(result);
// })


// function sum(a,b){
//     return new Promise((resolve, reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }else{
//             reject("Error a < 0");
//         }
//     })
// }

// sum(-2,2).then(result => {
//    console.log(result);
// }).catch(error => {
//     console.log(error);
//     // return sum(2,2);
//     return new Promise(resolve=>{
//         resolve(10);
//     })
// }).then(result => {
//     console.log(result);
// })