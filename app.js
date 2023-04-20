
const express = require("express");
require("dotenv").config();
const app = express();

// route
app.get("/", (req, res) => {
  // Sending This is the home page! in the page
  res
    .status(200)
    .send(`This is the yogesh borole and running on ${process.env.PORT} hii`);
});

// Listening to the port 
let PORT = process.env.PORT ? process.env.PORT : 8000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running...`);
});
