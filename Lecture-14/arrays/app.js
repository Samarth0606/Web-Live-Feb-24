// let obj = {};    //object
// let arr = [];    //Array

// let arr = [10, 20, 30, 40, 50];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[4]);

// ------------
// console.log(arr[44]); //undef.

// --------------------------------

// let arr2 = [10, 20, true, false, null, undefined, "sam", "vohra"];
// console.log(arr2);
// console.log(arr2[5]);
// console.log(arr2[4]);

// ------------------------------

// let arr2 = [
//   10,
//   20,
//   true,
//   false,
//   [100, [200, 201, 202], 300],
//   undefined,
//   "sam",
//   "vohra",
// ];
// //access 200
// console.log(arr2[4]);
// console.log(arr2[4][1]);
// console.log(arr2[4][1][2]);

// ------------------------------
// array mathods
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// // push() -> last m add krna
// let var1 = arr.push(70); //1
// let var2 = arr.push(80, 90, 100); //multiple
// console.log(var1, var2); //length
// console.log(arr);

// -----------------

// pop() -> last m se hatana
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// // arr.pop(40); //argument ki izzt nhi hai
// let returnedValue = arr.pop();
// console.log(arr);
// console.log(returnedValue);

// -----------------

// shift () -> pop() -> lekin starting mei

// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// let returnedValue = arr.shift(); //argument ki izzt nhi hai
// console.log(arr);
// console.log(returnedValue);

// -----------------

// unshift() -> push() -> lekin starting mei

let arr = [10, 20, 30, 40, 50];
console.log(arr);
let returnedValue = arr.unshift(100, 300, 500); //argument ki izzt nhi hai
console.log(arr);
console.log(returnedValue);
