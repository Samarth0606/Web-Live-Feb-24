// step-1

let step1 = function () {
  console.log("plzz wait i am selecting the image...");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("image is selected");
    }, 4000);
  });
};

// step-2

let step2 = function () {
  console.log("plzz wait i am applying filter...");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("filter is applied");
    }, 2000);
  });
};

// step-3
let step3 = function () {
  console.log("plzz wait i am adding caption...");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("caption is added");
    }, 5000);
  });
};

// step-4
let step4 = function () {
  console.log("plzz wait i am uploading the image...");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // jo pehle hogya
      //   resolve("image uploaded");
      reject("image uploaded nahi hui sorry");
    }, 3000);
  });
};

step1()
  .then(function (image) {
    console.log(`heyy ${image}`);
    return step2();
  })
  .then(function (filter) {
    console.log(filter);
    return step3();
  })
  .then(function (caption) {
    console.log(caption);
    return step4();
  })
  .then(function (upload) {
    console.log(upload);
  })
  .catch(function (err) {
    console.log(err);
  });
