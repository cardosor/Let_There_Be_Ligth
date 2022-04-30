//get html elements
const btn = document.querySelector("#lightSwitch");
const lightBulb = document.querySelector("img");
const container = document.querySelector(".container");

//add listener to switch image
btn.addEventListener("click", e => {
    //toggle class
    container.classList.toggle("container-light");
    lightBulb.classList.toggle("turn-light-on");
    btn.classList.toggle("turn-light-switch-on");
    //toggle alt attribute
    if(btn.classList.contains("turn-light-switch-on")){
        lightBulb.alt = "Picture of the light bulb, its on.";
        btn.alt = "This is a ligth switch. its on.";
    }else{
        lightBulb.alt = "Picture of the light bulb, its off.";
        btn.alt = "This is a ligth switch. its off.";
    }
    
})