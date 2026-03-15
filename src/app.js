const express = require('express');

const server = express();
server.use('/hello/2',(req,res)=>{
  res.send("hello 2")
})

server.use("/hello",(req,res)=>{
  res.send("Hi helooo")
})

server.use('/test',(req,res)=>{
  res.send("Hi testingggg");
})



server.use('/',(req,res)=>{
  res.send("Wildcard")
})

server.listen(7777,()=>{
  console.log("Server running at port 7777...")
});