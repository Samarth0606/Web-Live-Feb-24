let inpEl = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerHTML = inpEl.value;

  //   task2
  li.addEventListener("click", function () {
    li.remove();
  });

  //   emopty nhi jaega
  if (li.innerHTML === "") {
    return;
  } else {
    ul.append(li);
    inpEl.value = ""; //input ko add krne ke baad empty
  }
});
