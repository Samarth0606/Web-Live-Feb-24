let div = document.querySelector("div");

div.nextElementSibling.style.color = "blue";
div.previousElementSibling.style.color = "green";

div.parentElement.style.border = "2px solid black";

let section = document.querySelector("section");
console.log(section.children);
section.children[1].style.fontSize = "40px";
