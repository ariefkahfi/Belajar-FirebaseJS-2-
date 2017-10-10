var express = require('express');
var firebase = require('firebase');


var fs = require('fs');

var app = express();


function openFile(fileName,res){
    fs.readFile(fileName,function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    });
}

var config = {
    apiKey: "AIzaSyB03SN3vVnKhlYpE9RXXFWxczgOrGyKK2I",
    authDomain: "belajar-firebase3-2a94e.firebaseapp.com",
    databaseURL: "https://belajar-firebase3-2a94e.firebaseio.com",
    storageBucket: "belajar-firebase3-2a94e.appspot.com"
};

firebase.initializeApp(config);



app.get('/book',(req,res)=>{
   openFile('./pages/ListBook.html',res);
});

app.get('/form',(req,res)=>{
   openFile('./pages/FormBook.html',res);
});

app.get('/',function(req,res){
   openFile('./pages/Home.html',res);
});


app.listen(3000);