// function user() {}

// let output = user();
// console.log(output);

// ----------------------------
//constructor functions -> to create objects
// function user() {}

// let output = new user();
// console.log(output);

// ---------------------------
//this
// function user() {
//   this.name = "samarth";
//   this.age = 39;
//   this.favColor = "black";
// }

// let output = new user();
// console.log(output);

// -------------------------

// function User(naam, umar, rang) {
//   this.name = naam;
//   this.age = umar;
//   this.favColor = rang;
// }

// let output = new user("sam", 29, "blue");
// let output2 = new user("vohra", 38, "pink");
// console.log(output, output2);

//covention => jo compulsary nhi hota, but good prac hota hai karne ke liye

// ---------------------------

function Lalaji(a, b) {
  this.name = a;
  this.friendName = b;
  this.callFriend = function () {
    console.log(`my frnd is ${this.friendName}`);
  };
}
// let out1 = Lalaji("tom", "jerry");
let out1 = new Lalaji("tom", "jerry");
// console.log(out1);
console.log(out1.callFriend());
