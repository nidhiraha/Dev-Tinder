const express = require('express');

const server = express();

server.use('/test',(req,res)=>{
  res.send("Hi it's me");
})

server.listen(7777,()=>{
  console.log("Server running at port 7777...")
});