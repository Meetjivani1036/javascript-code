// function sum (a, b) {
//     return a + b;
// }
// console.log(sum(10, 20));

 
// const sum = (a, b) => {
//     return a + b;
// };
// console.log(sum(10, 40));
// // arrow function syntax
// const multi = (a, b) => {
//     return a*b;
// };
// console.log(multi(10, 20));

// let countvowwls = (str) => {
//     let count = 0;
//     for (let char of str) {
//         if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//              char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//             count++;
//         }
    
//     }
//     return count;
// }
// let a = countvowwls("hello world");
// console.log(a);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(function printval(val) {
//     console.log(val);
// });

// arr.forEach((val,index,arr) => {
//     console.log(val, index, arr);
// });

// let arr = [1, 2, 3, 4, 5];

// let newarr = arr.map((val) => {
//     return val*val;
// });

// console.log(newarr);

let arr = [1, 2, 3, 4, 5];
let newarr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(newarr);

let output = arr.reduce((a,b) => {
    return a > b ? a : b;
}); 
console.log(output);