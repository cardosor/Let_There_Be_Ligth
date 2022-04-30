//get html elements
const btn = document.querySelector("#lightSwitch");
const lightBulb = document.querySelector("img");
const body = document.querySelector("body");

//add listener to switch image
btn.addEventListener("click", e => {
    //toggle class
    body.classList.toggle("blackBG")
    lightBulb.classList.toggle("turn-light-on");
})