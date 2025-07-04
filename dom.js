// let newbutton = document.createElement("button");
// newbutton.innerHTML = "Click Me!";

// newbutton.style.backgroundColor = "red";
// newbutton.style.color = "white";

// document.querySelector("body").prepend(newbutton);

let btn1 = document.querySelector("button");

btn1.onclick = (evt) => {
    console.log("Button clicked!");
    console.log(evt);
    console.log(evt.target);
};