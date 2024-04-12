// string methods

let str = "SaMaRth  VohrA";
let str2 = "     SaMaRth  VohrA        ";

// length ? (property)

console.log(str.length);
console.log(str2.length); //white spaces are also counted

// toUpperCase() ? (method)
console.log(str.toUpperCase());

// toLowerCase()
console.log(str.toLowerCase());

// trim() -> white spaces => start & end
console.log(str.trim().length);
console.log(str2.trim().length);

// includes() -> boolean value
console.log(str.includes("s"));
console.log(str.includes("sa"));
console.log(str.includes("Sa"));
console.log(str.includes("Vo"));

//google -> mdn string methods (try)
