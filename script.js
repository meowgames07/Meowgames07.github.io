/* ===========================
   MeowGames07 - Script Part 1
=========================== */

/* Search Games */

function searchGames() {

let input = document
.getElementById("search")
.value
.toLowerCase();

let cards = document
.querySelectorAll(".card");

cards.forEach(card => {

let title = card
.querySelector("h3")
.innerText
.toLowerCase();

if (title.includes(input)) {

card.style.display = "block";

} else {

card.style.display = "none";

}

});

}

/* Active Category Button */

const categoryButtons =
document.querySelectorAll(".categories button");

categoryButtons.forEach(button=>{

button.addEventListener("click",function(){

categoryButtons.forEach(btn=>{

btn.classList.remove("active");

});

this.classList.add("active");

});

});
/* ===========================
   Filter Games
=========================== */

function filterGames(category, button){

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

if(category==="all"){

card.style.display="block";

}else{

if(card.classList.contains(category)){

card.style.display="block";

}else{

card.style.display="none";

}

}

});

/* Active Button */

document.querySelectorAll(".categories button").forEach(btn=>{

btn.classList.remove("active");

});
/* ===========================
   Back To Top Button
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

/* ===========================
   Header Shadow on Scroll
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

} else {

header.style.boxShadow = "none";

}

});

/* ===========================
   Card Fade Animation
=========================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-8px)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0)";

});

});
/* ===========================
   MeowGames07 - Script Part 4
=========================== */

/* Newsletter */

const form = document.querySelector(".newsletter form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thanks for subscribing to MeowGames07!");

this.reset();

});

}

/* Smooth Button Hover */

const playButtons=document.querySelectorAll(".play");

playButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

/* Image Animation */

const images=document.querySelectorAll(".card img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/* Console Message */

console.log("🎮 Welcome to MeowGames07");

/* Finished */
if(button){

button.classList.add("active");

}

}

/* Show All Games on Page Load */

window.addEventListener("load",()=>{

filterGames("all");

});
