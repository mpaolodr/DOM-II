// Your code goes here

const body = document.querySelector("body");
const contentImg = document.querySelectorAll(".img-content");
const reverseDir = document.querySelectorAll(".content-section");
const contentTxt = document.querySelectorAll(".text-content");
const headImg = document.querySelector(".intro img");
const destination = document.querySelector(".content-destination");
const navContainer = document.querySelector(".nav-container");
const mainNav = document.querySelector(".main-navigation");
const navLink = document.querySelectorAll(".nav-link");
const btn = document.querySelectorAll(".destination .btn");

mainNav.style.zIndex = "5";

//MOUSEOVER IMAGES
contentImg.forEach(function(item) {
  item.addEventListener("mouseover", function(e) {
    item.style.transform = "scale(1.2)";
    item.style.transition = "all 0.2s";
    e.stopPropagation();
  });
});

//MOUSELEAVE IMAGES
contentImg.forEach(function(item) {
  item.addEventListener("mouseleave", function(e) {
    item.style.transform = "scale(1)";
    e.stopPropagation();
  });
});

//CLICK EVENTS
reverseDir.forEach(function(item) {
  item.addEventListener("click", function() {
    item.style.flexDirection = "row-reverse";
  });
});

navLink.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
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

//RESIZE
window.addEventListener("resize", function() {
  if (screen.width <= 980) {
    navContainer.style.flexDirection = "column";
    mainNav.style.position = "static";
  } else {
    navContainer.style.flexDirection = "row";
    mainNav.style.position = "fixed";
  }
});

//GSAP
btn.forEach(function(item) {
  item.addEventListener("mouseover", function(e) {
    e.stopPropagation();
    gsap.to(item, {
      duration: 2,
      ease: "bounce.out",
      y: -15,
      x: 0
    });
  });
});

btn.forEach(function(item) {
  item.addEventListener("mouseleave", function(e) {
    e.stopPropagation();
    gsap.to(item, {
      y: 0,
      x: 0,
      repeat: 0
    });
  });
});
