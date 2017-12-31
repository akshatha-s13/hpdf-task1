var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var axios = require('axios');
var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
 res.send('Hello World - Akshatha S');
});

app.get('/authors', function(req, res)  {
    axios.get('https://jsonplaceholder.typicode.com/users').then(users => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
            var data = "<ul>";
            users.data.forEach(user => {
                var postsByUser = posts.data.filter(
                    post => post.userId == user.id
                ).length;
                data += '<li>' + user.name + ' has ' + postsByUser + ' posts</li>';
            });
            data += "</ul>";
            res.send(data);
        }).catch(error => res.status(500));
    }).catch(error => res.status(500));
});

app.get('/setcookie', function(req, res) {
res.cookie('name', 'Akshatha');
res.cookie('age', '19').send('Cookie is set');
});

app.get('/getcookies', function(req, res) {
res.write("Getting the Cookie set");
res.write("\nName : "+req.cookies.name);
res.write("\nAge  : "+req.cookies.age);
res.end();
});

app.get('/robots.txt', function(req, res) {
 res.send('Access Denied!!! You are not allowed to view robots.txt!!!')
});

app.get('/html', function(req, res) {
 res.sendFile(path.join(__dirname +'/sample.html'));
});

app.get('/input', function(req, res) {
res.sendFile(path.join(__dirname +'/input.html'));
});

app.post('/input',function(req,res){
res.send('Input entered is : '+req.body.Input);
console.log('You entered : '+req.body.Input)
});

var port=8080;
app.listen(port, function() { 
console.log('Listening for connections on port '+port+'!');
});