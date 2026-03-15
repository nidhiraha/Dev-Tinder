const express = require('express');

const server = express();

server.use('/user', (req, res,next) => {
  console.log("First Route Handler!!")
  res.send("First");
  next();
},(req, res) => {
  console.log("Second Route Handler!!")
  res.send("Second")
});``

server.listen(7777, () => {
  console.log("Server running at port 7777...");
});