// ===========================
// MeowGames07 Script
// ===========================

// Live Search
function searchGames() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(input)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}

// Category Filter
function filterGames(category, button){

    let cards = document.querySelectorAll(".card");
    let buttons = document.querySelectorAll(".categories button");

    buttons.forEach(function(btn){
        btn.classList.remove("active");
    });

    if(button){
        button.classList.add("active");
    }

    cards.forEach(function(card){

        if(category === "all"){
            card.style.display = "block";
        }
        else if(card.classList.contains(category)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}

// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00c853";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

window.addEventListener("scroll",function(){

    if(window.scrollY>300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};

// Fade Animation

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(function(card){

card.style.opacity="0";
card.style.transform="translateY(30px)";
card.style.transition=".5s";

observer.observe(card);

});
