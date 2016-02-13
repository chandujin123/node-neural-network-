module.exports={
	rA : function(req,res,next){
		console.log('logged!');
		next();
	},
	logger:function(req,res,next)
	{
		console.log((new Date()).toString()+'--'+req.maethod+'--	'+req.originalUrl);
		next();
	}
}