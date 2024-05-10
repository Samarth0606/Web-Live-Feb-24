// let inpEl = document.querySelector("input");

// inpEl.addEventListener("input", function () {
//   console.log("mai input hu dabb gya");
// });

// -----------------------------------------

// let inpEl = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//   //   console.log(event.target);
//   console.log(event.target.innerText);
// });

// inpEl.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

// ----------------------------------

let inpEl = document.querySelector("input");
let btn = document.querySelector("button");

inpEl.addEventListener("keydown", function (e) {
  if (e.which === 13) {
    console.log(e.target.value);
  }
});

btn.addEventListener("click", function (e) {
  console.log(inpEl.value);
});
