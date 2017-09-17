
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const data =require("./data/data");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: true
  }));
  app.use(bodyParser.text({ defaultCharset: 'utf-8' }));
  app.get("/products",(req,res)=>{
    res.json(data);
  })






app.listen(process.env.PORT || 3000);