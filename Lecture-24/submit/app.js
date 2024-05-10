let formEl = document.querySelector("form");

// formEl.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e.target);
//   console.log(e.target.children[0].value);
//   console.log(e.target.children[1].value);
//   console.log(e.target.children[2].innerText);
// });

// ----------------------------------

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target);
  //   only for form
  console.log(e.target.elements[0].value);
  console.log(e.target.elements[1].value);
  console.log(e.target.elements[2].innerText);
});
