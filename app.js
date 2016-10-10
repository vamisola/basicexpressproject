var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//set static Path
app.use(express.static(path.join(__dirname, 'public')));


app.get("/people", function(req,res){
    var people = [
        {
            firstname: "John",
            lastname: "Doe",
            age: 34,
            gender: "male"
        },
        {
            firstname: "Tom",
            lastname: "Jones",
            age: 50,
            gender: "male"
        },
        {
            firstname: "Jane",
            lastname: "Doe",
            age: 28,
            gender: "female"
        }
        ];
        res.json(people);
});


app.get("/download",function(req,res){
    res.download(path.join(__dirname,"/downloads/ecowebhosting.pdf"));
});


app.get("/about", function(req,res){
    res.redirect("/about.html");
});

app.post("/subscribe", function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    console.log(name + ' has subscribe with ' + email);
    
});


// app.listen(3000, function(){
//     console.log("Server Has Started!");
// });


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Has Started!");
});