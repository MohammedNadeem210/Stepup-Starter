var express=require('express');
var app=express();

var port=process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 1337;;
var ip= process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.get('/',function(request,response){
    response.send('Hi Nadeem');
});
app.listen(port,ip,function(){
    console.log('Port Number : '+port + 'Server Ip : '+ ip);
});