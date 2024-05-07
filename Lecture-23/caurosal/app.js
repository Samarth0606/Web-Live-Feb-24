let imgEl = document.querySelector("img");

let arr = [
  "https://images.unsplash.com/photo-1715010744925-37a5b83e0d75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1669380425625-864e482ecb12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1714770474609-2ba25a6c3d53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1711246567309-a78a58f4a042?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
];

let i = 0;

let id = setInterval(function () {
  imgEl.setAttribute("src", arr[i]);
  i = (i + 1) % arr.length;
}, 2000);

setTimeout(function () {
  clearInterval(id);
}, 30000);
