// function step1() {
//   console.log("plzz wait i am selecting the image...");
//   setTimeout(function () {
//     console.log("image selected");
//   }, 4000);
// }
// function step2() {
//   console.log("plzz wait i am applying filter...");
//   setTimeout(function () {
//     console.log("filter applied");
//   }, 2000);
// }

// step1();
// step2();

// -------------------------------
//callbackhell

function step1(fn) {
  console.log("plzz wait i am selecting image...");
  setTimeout(function () {
    console.log("image selected");
    fn("selected image");
  }, 4000);
}
function step2(image, fn) {
  console.log(`plzz wait i am applying filter to ${image}...`);
  setTimeout(function () {
    console.log("filter applied");
    fn("filtered image");
  }, 2000);
}
function step3(filter, fn) {
  console.log(`plzz wait i am adding caption to ${filter}`);
  setTimeout(function () {
    console.log("caption applied");
    fn("captioned image");
  }, 5000);
}
function step4(caption) {
  console.log(`plzz wait i am uploading ${caption}`);
  setTimeout(function () {
    console.log("image uploaded");
  }, 3000);
}

//callback hell
// #advantage => async programming => step1 -> 2 ->3 ->4
// #disadvantage => code grows horizontally => pyramid of doom => code manage mushkil

// #CALLBACK HELL SE Bachne KA TAREEKA => Promises ✅ (next class)

step1(function (image) {
  step2(image, function (filter) {
    step3(filter, function (caption) {
      step4(caption);
    });
  });
});
