const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyQuotes = [
    {
        author:"Samarth Vohra",
        text:"mausam hai suhana zara chai pilana"
    },
    {
        author:"Arvind Mera Saathi",
        text:"live location trace hori hai"
    },
    {
        author:"Garima Mishra",
        text:"I have not failed. I've just found 10,000 ways that won't work"
    },
    {
        author:"Aditya Gupta",
        text:"No one is like Samarth bhaiya"
    },
    {
        author:"Kailash Maurya",
        text:"Embrace Samarth bhaiya instead of Ezsnippet"
    }
]


async function seedDB(){
    await Quotes.insertMany(dummyQuotes);
    console.log("db seeded")
}

module.exports = seedDB;