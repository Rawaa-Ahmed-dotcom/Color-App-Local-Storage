let active = document.querySelector(".active");
let color = document.querySelectorAll(".colors > div");
let parent = document.querySelector(".colors");
let result = document.querySelector(".result");
for(let i = 0; i< color.length ; i++) {
    color[i].onclick = function() {
        color.forEach(function(element) {
            element.classList.remove("active");
            element.style.cssText = "opacity: 0.5";
            
        });
        color[i].style.cssText = "transition: 0.5;opacity:1;";
        color[i].classList.add("active");
        localStorage.setItem("background", color[i].id);
        result.style.background = localStorage.getItem("background");
    }
    
}

window.onload = function() {
    if(localStorage.getItem("background")){
        result.style.background = localStorage.getItem("background");
    }
    else {
        result.style.background = "red";
    }
}