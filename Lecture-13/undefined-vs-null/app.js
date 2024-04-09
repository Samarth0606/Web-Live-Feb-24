// let someVariable = "samarth";
// console.log(someVariable);

// -------------------

// let anotherVariable; //js engine -> points to undef
// console.log(anotherVariable);

// -------------------

// let email; // points to undefined

// if (email === undefined) {
//   console.log("email is required");
// } else {
//   console.log(email);
// }

// -----------------------

let email; //js engine -> undef.
// email = "sam@gmail.com";
// email = undefined; //khud se likhra ❌
email = null; //khud se likhra ✅

if (email === undefined) {
  console.log("email is required");
} else {
  console.log(email);
}

//No way to figure out
// we never give undef khudse ❌
//  we only give null ✅
