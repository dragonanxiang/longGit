var express = require('express');
var UserService = require("../service/UserService.js");
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('123');
});


router.post("/login", function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	//console.log(username,password);
	//调用服务层接口
	UserService.login(username, password, function(data) {
		if(data=="true"){
			req.session.username=username;
		}
		res.send(data);
		console.log(req.session.username);
		console.log(req.session);
	});
});

router.post("/isLogin", function(req, res) {
	console.log("in");
	console.log(req.session.username);
	if (req.session.username) {
		res.send({
			username:req.session.username
		});
		console.log("send");
	} else {
		res.send("false");
	}
});

router.post("/reg", function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var realName=req.body.realName;
	var tel=req.body.tel;
	var gender=req.body.gender;
	UserService.reg(username, password, realName,tel,gender,function(data) {
		res.send(data);
	})
});


router.post("/isUsed", function(req, res) {
	var username=req.body.username;
	UserService.isUsed(username, function(data) {
		res.send(data);
	});
});

router.post("/buy", function(req, res) {
	var username=req.body.username;
	var ProductKeyWord=req.body.ProductKeyWord;
	var size=req.body.size;
	var quantity=req.body.quantity;
	var price=req.body.price;
	var time=req.body.time;
	var colorImg=req.body.colorImg;
	UserService.buy(username,ProductKeyWord,size,quantity,price,time,colorImg,function(data) {
		res.send(data);
	});
});

router.post("/getOrder", function(req, res) {
	console.log(req.session.username);
	var username=req.session.username;
	UserService.getOrder(username,function(data) {
		res.send(data);
	});
});

router.post("/del", function(req, res) {
	var id=req.body.id;
	var username=req.session.username;
	UserService.del(id,username,function(data) {
		res.send(data);
	});
});



module.exports = router;