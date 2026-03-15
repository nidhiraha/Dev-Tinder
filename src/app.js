const express = require('express');

const server = express();

server.use('/user', (req, res) => {
  console.log(req.query.name,req.query.id);
  res.send("Advance routing technique!!");
});``

server.listen(7777, () => {
  console.log("Server running at port 7777...");
});