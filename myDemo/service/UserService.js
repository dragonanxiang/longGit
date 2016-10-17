
var UserDao = require("../dao/UserDao.js");

exports.login = function(username, password, callback) {
	UserDao.login(username, password, function(data) {
		if(data.length==1){
			callback("true");
		}else {
			callback("false");
		}
	});	
};

exports.reg = function(username, password, realName,tel,gender,callback) {
	UserDao.reg(username, password, realName,tel,gender,function(data) {
		callback(data);
	});
};


exports.isUsed = function(username, callback) {
	UserDao.isUsed(username, function(data) {
		callback(data);
	});
};

exports.buy = function(username,ProductKeyWord,size,quantity,price,time,colorImg,callback) {
	UserDao.buy(username,ProductKeyWord,size,quantity,price,time,colorImg,function(data) {
		if(data){
			callback("true")
		}else {
			callback("false")
		}
	});
};

exports.getOrder= function(username, callback) {
	UserDao.getOrder(username, function(data) {
		callback(data);
	});
};

exports.del= function(id,username,callback) {
	UserDao.del(id,username, function(data) {
		callback(data);
	});
};

