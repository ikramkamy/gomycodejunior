const express = require("express");
const bodyParser = require("body-parser");
const postRoutes=require("./routes/PostRoutes")
const app = express();
const db=require('./db');
const cors=require('cors');
app.use(bodyParser.json())
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });
  
  app.get('/all',(req,res)=>{
    res.send('hello Hacker-news clone')
  })
 app.use(postRoutes);
app.listen(3001,() =>{
console.log(`server Hacker-news clone is running on port 3001`)
})


