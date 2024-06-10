var colors = require('colors');
const figlet = require("figlet");

figlet("Samarth", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data.rainbow);
  });