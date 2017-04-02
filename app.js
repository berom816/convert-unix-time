//activate express
var express = require("express");
var app = express();

//set up view engine with ejs and get display assets (css) from assets folder
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

//get converting function from module converTime
var convertTime = require('./convertTime');

//on default home page, render homeDisplay.ejs 
app.get('/',function(req,res){
    res.render('homeDisplay'); 
});

//on page with parameter, convert the parameter using convertTime module and render with resultDisplay
app.get('/:entry',function(req,res){
    var displayConvertedTime = convertTime.getConvertedTime(req.params.entry);
    //render resultDisplay with data passed in
    res.render('resultDisplay',{holdResult:displayConvertedTime});
});

//listen to port
app.listen(8080,'0.0.0.0');
console.log('listening on 8080');