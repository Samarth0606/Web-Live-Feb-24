//constructor => objects
// function Person(fn, ln, mail) {
//   this.firstName = fn;
//   this.lastName = ln;
//   this.email = mail;
// }

// Person.prototype.fn = function () {
//   console.log(`my email is ${this.email}`);
// };

// let p1 = new Person("sam", "vohra", "sam@gmail.com");
// console.log(p1);

// ------------------------

//classes
// class Person{
//     constructor(){}
// }

// class Person {
//   constructor(naam, umar, mail) {
//     this.nameame = naam;
//     this.age = umar;
//     this.email = mail;
//   }
//   fn() {
//     console.log(`my email is ${this.email}`);
//   }
// }

// let p2 = new Person("mav", 2, "mav@gmail.com");
// console.log(p2);

// ----------------------

// class Person {
//   constructor(naam, umar, mail) {
//     this.name = naam;
//     this.age = umar;
//     this.email = mail;
//   }
//   fn() {
//     console.log(`my email is ${this.email}`);
//   }
// }

// let p2 = new Person("mav", 2, "mav@gmail.com");
// console.log(p2);

// // ---------------------------------------------
// //inheritance
// class Student extends Person {}

// let s2 = new Student("mav1", 22, "mavi@gmail.com");
// console.log(s2);

// -----------------------------------------------------------------

class Person {
  constructor(naam, umar, mail) {
    this.name = naam;
    this.age = umar;
    this.email = mail;
  }
  fn() {
    console.log(`my email is ${this.email}`);
  }
}

let p2 = new Person("mav", 2, "mav@gmail.com");
console.log(p2);

// ---------------------------------------------
//inheritance
class Student extends Person {
  constructor(naam, umar, mail, batch) {
    super(naam, umar, mail); //right way
    // super(naam, mail, umar); //wrong way (ordering matters)
    this.batch = batch;
  }
  //method overriding
  fn() {
    console.log(`my umar is ${this.age}`);
  }
}

let s2 = new Student("mav1", 22, "mavi@gmail.com", "live");
console.log(s2);
