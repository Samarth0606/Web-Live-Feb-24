// let h2 = document.querySelector("h2");

// // console.log(h2);

// // innerText
// console.log(h2.innerText);

// //textContext
// console.log(h2.textContent);

// -----------------------------
//getter & setter
let p = document.querySelector("p");

// innerText
console.log(p.innerText); //brainful -> it can read css
p.innerText = "samaarth";
p.innerText = "<h1>samaarth</h1>";

//textContext
// console.log(p.textContent); //brainless-> it connot read css
// p.textContent = "vohra ji";
// p.textContent = "<h1>samaarth</h1>";

//getter and setter
p.innerHTML = "<span>samaarth</span>";
