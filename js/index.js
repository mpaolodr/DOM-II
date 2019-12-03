// Your code goes here
const body = document.querySelector("body");
const contentImg = document.querySelectorAll(".img-content");
const reverseDir = document.querySelectorAll(".content-section");
const contentTxt = document.querySelectorAll(".text-content");
const headImg = document.querySelector(".intro img");
const destination = document.querySelector(".content-destination");

//MOUSEOVER IMAGES
contentImg.forEach(function(item) {
  item.addEventListener("mouseover", function(e) {
    item.style.transform = "scale(1.2)";
    item.style.transition = "all 0.2s";
    item.style.zIndex = "1";
    e.stopPropagation();
  });
});

//MOUSELEAVE IMAGES
contentImg.forEach(function(item) {
  item.addEventListener("mouseleave", function(e) {
    item.style.transform = "scale(1)";
    item.style.zIndex = "-1";
    e.stopPropagation();
  });
});

//CLICK EVENTS
reverseDir.forEach(function(item) {
  item.addEventListener("click", function() {
    item.style.flexDirection = "row-reverse";
  });
});

//DBLCLICK EVENT

reverseDir.forEach(function(item) {
  item.addEventListener("dblclick", function() {
    item.style.flexDirection = "row";
  });
});

//LOAD
window.addEventListener("load", function() {
  body.style.background = "#e66465";
});

//SCROLL EVENT
body.addEventListener("wheel", function(e) {
  if (e.y % 2 === 0) {
    body.style.background = "linear-gradient(#e66465, #9198e5)";
  } else {
    body.style.background = "linear-gradient(#9198e5, #e66465)";
  }
});

//MOUSEENTER
headImg.addEventListener("mouseenter", function(e) {
  headImg.style.transform = "rotateZ(70deg)";
  headImg.style.transformOrigin = "0 0";
  headImg.style.transition = "transform 0.5s ease-out";
});

//DRAG
headImg.addEventListener("drag", function(e) {
  headImg.style.transform = "rotateZ(0deg)";
});

//KEYDOWN
body.addEventListener("keydown", function(e) {
  if (e.key === "Backspace") {
    destination.style.display = "none";
  } else if (e.key === "Delete") {
    headImg.style.display = "none";
  } else {
    destination.style.display = "block";
    headImg.style.display = "block";
  }
});
