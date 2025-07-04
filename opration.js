let a = prompt("enter your nember (0-100)");
if (a % 2 == 0){
    console.log("this number is even", a);
}
else{
    console.log("this number is odd", a );
}

const action = "say_hello";
switch (action) {
  case "say_hello":
    const message = "hello";
    console.log(message);
    break;
  case "say_hi":
    const message1 = "hi";
    console.log(message1);
    break;
  default:
    console.log("Empty action received.");
}
