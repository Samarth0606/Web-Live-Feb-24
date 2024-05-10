// let divv = document.querySelector("div");

// function samarth() {
//   console.log("hi i am samarth");
// }

// divv.onclick = samarth;

// ---------------------

// let h4 = document.querySelector("h4");

// function vohra() {
//   console.log("CHLA JA ROOM SE");
// }
// function darwaza() {
//   console.log("darwaza band krde");
// }

// h4.onclick = vohra;
// h4.onclick = darwaza;

// ----------------------------
let h4 = document.querySelector("h4");

function vohra() {
  console.log("CHLA JA ROOM SE");
}
function darwaza() {
  console.log("darwaza band krde");
}
h4.addEventListener("click", vohra);
h4.addEventListener("click", darwaza);
