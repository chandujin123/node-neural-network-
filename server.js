var a=require('express');
var a1=a();
/*a1.get('/',function(req,res){
	res.send('Hello Fucker!!')
});*/
var mw=require('./middelwear.js');
var port= process.env.PORT || 3000;
//a1.use(mw.requireAuthentication);
a1.use(mw.logger);
a1.get('/about',mw.rA,function(req,res){
	res.send('about! us Fucker!!')
});
console.log(__dirname+'\\public');
a1.use(a.static(__dirname+'\\public'))
//a1.listen(3000);
a1.listen(port,function(){
	console.log('Server Started at '+port);
});