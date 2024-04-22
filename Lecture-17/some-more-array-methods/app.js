//works only on array

// forEach() => method, not loop
//-> accepts a cb fn -> with 2 args (item , index)
//-> it doesnot returns anything

// let arr = ["messi", "ronaldo", "neymar", "zlatan", "mappe"];
// // arr.forEach()
// let returnedVal = arr.forEach(function (item, index) {
//   console.log(`${item} -> ${index}`);
// });
// console.log(returnedVal);

// -----------
//1-10 array -> print ✅

// ----------------------
//map() => method
//-> accepts a cb fn -> with 2 args (item , index)
// -> it returns a new array -> with the same no of elements as that of original array

// let arr2 = [10, 20, 30, 40, 50];
// let returnedArr = arr2.map(function (item, index) {
//   return item * item * item;
// });

// console.log(arr2);
// console.log(returnedArr);

// ------------
// write a function to print the array with  mul 5

// ------------------------------
//filter() => method
//-> accepts a cb fn -> with 2 args (item , index)
// -> it returns a new array -> the no of elements i the new returned is not fixed i.e it only returns the thuthy values

let arr3 = [35, 50, 60, 70, 30];

let newArr = arr3.filter(function (item, index) {
  if (item > 40) {
    return true;
  }
});

console.log(arr3);
console.log(newArr);

// ------------------
// fn to store even numbers

// -------------------------------------
// HOMEWORK: reduce , find (ARRAY METHODS) -> (mdn) => important

// prompt -> class m hua hai
