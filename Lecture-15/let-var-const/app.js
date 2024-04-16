// let a = 100;
// console.log(a)

// -----------
//1. let
//reassign  ✅
// let a = 100;
// a = 400;
// console.log(a);
// ----
//redeclare ❌
// let a = 100;
// let a = "sam";
// console.log(a); //error

// ---------------
//2. var
//reassign  ✅
// var a = "sam";
// a = 1000;
// console.log(a);
// ---
//redeclare ✅
// var a = 100;
// var a = "sam";
// console.log(a);

// ---------------
//3. const
//reassign  ❌
// const a = 10;
// a = 100;
// console.log(a); //error
// ---
//redeclare ❌
// const a = 10;
// const a = "bhai";
// console.log(a); //error

// -----------examples-----------

// var a = 10;
// a = "sam";
// console.log(a); //sam

// var a = "lolipop";
// console.log(a); // lolipop

// ----------

// const a = 10;
// a = "lol";
// console.log(a); //error

// -----------
//interview -> const variable -> ussi time par usse assign krn zaroori hai

// const a; //error
// const a = 100; //compulsary hai
// a = "lol";
// console.log(a); //error
