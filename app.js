var express=require('express');
var app=express();
var port=process.env.port || 1337;
app.get('/',function(request,response){
    response.send('<html><head></head><body><h1>NodeJS & Express</h1></body></html>')
});
app.get('/api',function(request,response){
    response.json({firstName:'Mohammed',lastName:'Nadeem'})
})
app.listen(port);