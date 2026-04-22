// Button Interaction
const button = document.querySelector("#changeTextBtn");

button.addEventListener("click", function() {
    document.querySelector("#welcomeText").textContent = "You clicked the button!";
    console.log("Button clicked");
});


// Dynamic Text
let userName = "Juliet Dhewa";
document.querySelector("#welcomeText").textContent = "Welcome, " + userName;
console.log("Text updated");


// Dark Mode
const themeBtn = document.querySelector("#themeToggle");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    console.log("Dark mode toggled");
});


// Menu
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("hidden");
    console.log("Menu toggled");
});


// Form
const form = document.querySelector("#contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;

    if (name === "") {
        alert("Please enter your name");
        console.log("Empty form");
    } else {
        alert("Hello " + name);
        console.log("Form submitted");
    }
});