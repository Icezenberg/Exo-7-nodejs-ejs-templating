var express = require('express');
var app = express();
var port = 8060;
const request = require('request');

// route public pour charger avant les pages 
app.use(express.static('public'));



// utilisation des template ejs 
app.set("view engine", "ejs");


let url = 'http://localhost:'+port+'/'+'liste'
// appel des compétences via ejs
app.get('/', function(req, res) {
    request(url, function (err, response, body) {
        if (err) {
            console.log('err:', err);
        } else {
            var mesComp = JSON.parse(body)
            console.log('body:', body);
            console.log(mesComp);
        }
        // res.send(response);
        res.render('index',{
            competences:mesComp
        });

    });
    
    // res.sendFile(__dirname+'/index.html');
});


// route vers la liste des compétences
app.get('/liste', function(req, res){
    res.sendFile(__dirname+'/data.json')
});


// // port d'écoute
app.listen(port, function() { 
    console.log("Listening on port 8060")
});
 
