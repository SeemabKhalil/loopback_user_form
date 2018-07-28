const express = require('express');
const http=require('http');
const app=express();


let myServe=http.createServer((req,res)=>{
    response.writeHead(200,{"Content-type":"application/json"});
    response.write("ok");
    response.end();
});
app.get('/check', (req, res) =>
{
res.send();
});
let port=3000;
app.listen((req,res)=>{
    console.log("The port is Running"+port);
});
