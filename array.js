// // find the average
// let student = [85,97,44,37,76,60];
// let sum = 0;


// for (let val of student){
//     sum += val ;
// }

// let avg = sum / student.length;

// console.log(sum);
// console.log(avg);

// // find the discount of this array for  the for of loop used
// let item = [300,255,652,683,900];
// let idex = 0;

// for (let val of item){
//     let offer = val / 10;
//     item[idex] = item[idex] - offer;
//     console.log(val);
//     console.log(`after discount value ${item[idex]}`);
//     idex++;
// }

// array property pop and push tostring concat slice splice

let fooditem = ["megi","dabeli","bhel","pani puri"];
let fooditem2 = ["vada pav","dosa","idli"];

// pop removes the last element from an array and returns it
console.log(fooditem);
let i = fooditem.pop();
console.log(fooditem);
console.log(i);

// push adds one or more elements to the end of an array and returns the new length of the array
fooditem.push("pani puri")
console.log(fooditem);

// toString converts an array to a string and returns it
console.log(fooditem.toString());

// concat merges two or more arrays and returns a new array
let fooditem3 = fooditem.concat(fooditem2);
console.log(fooditem3);

// splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in plac
fooditem.splice(1, 2, "pav bhaji", "chole bhature");    
console.log(fooditem);

// slice returns a shallow copy of a portion of an array into a new array object
console.log(fooditem.slice(1, 3)); 

//shift removes the first element from an array and returns it
fooditem.shift();
console.log(fooditem);

// unshift adds one or more elements to the beginning of an array and returns the new length of the array
fooditem.unshift("biryani");
console.log(fooditem);