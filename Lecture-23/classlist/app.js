let h1 = document.querySelector("h1");

// h1.classList.add("sam");
// h1.classList.add("vohra");
// h1.classList.add("mav");

h1.classList.add("sam", "vohra", "mav");

// ---------------

h1.classList.remove("sam", "vohra");

// ---------------

console.log(h1.classList.contains("sam")); //f
console.log(h1.classList.contains("mav")); //t
