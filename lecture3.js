// let str = "jivani meet jaysukhbhai";
// let size=0;
// for(let val of str){
//     console.log("val",val);
//     size++;
// }
// console.log("size of this string",size);



// let student = {
//     name : "meet jivani",
//     age : 20,
//     cgpa : 8.50,
//     ispass : true,
// };

// for (let i in student){
//     console.log("key =",i,"vanlue =",student[i]);
// }



// template literals
// let secialstring = `this is money it a improtant`;
// console.log(typeof secialstring);



// let student = {
//     name : "meet",
//     cgpa : 8.5,
// };

// console.log("student name",student.name,"mark of this sem",student.cgpa);

// // this is type of written this code is template literals
// let output = `student name ${student.name} mark of this sem ${student["cgpa"]}`
// console.log(output);



// //string
// let str = "meet hellow every one \t" // sles is not consider in length
// console.log(str.length);

// // str.trim 
// let str1 = "   hello  every one    ";
// console.log(str1.trim());

// // str.slice
// let str2 = " hello every one !";
// console.log(str2.slice(1,9));

// // str.concat
// let a ="meet ";
// let b =" jivani";
// console.log(a.concat(b));

// // str.replace
// let c =" meet me ";
// console.log(c.replace("m","h"));
// console.log(c.replaceAll("m","h"));
// console.log(c.charAt(4));

let a = prompt("enter username ");
console.log(a);

let b = `@${a}${a.length}`
console.log(b);