const express= require('express');

const app = express();

app.get('/', function(req, res){
  // res.sendFile(__dirname + '/index.html');
  res.json({
    person:[
    {
      name:"Rajat",
      age:20,
      college:"MSIT"
    },
    {
      name:"Rajesh",
      age:36,
      work:"HR"
    }
  ]
});
});

app.listen(3000, function(){
  console.log('Server is running on port 3000');
});
