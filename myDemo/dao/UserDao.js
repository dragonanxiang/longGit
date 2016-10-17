

var UserModel = require("./user.js").UserModel;

exports.login = function(username, password, callback) {
	UserModel.find({
		username: username,
		password: password
	}, function(err, data) {
		callback(data);
	})
};

exports.reg = function(username, password, realName,tel,gender,callback) {
	new UserModel({
		username: username,
		password: password,
		realName: realName,
		tel:tel,
		gender:gender,
		order:[]
	}).save(function(err, data) {
		if(data) {
			callback("true");
		} else {
			callback("false");
		}
	})
};


exports.isUsed = function(username, callback) {
	UserModel.find({
		username: username
	}, function(err, data) {
		if(data.length == 0) {
			callback("true");
		} else {
			callback("false");
		}
	})
};

exports.buy = function(username,ProductKeyWord,size,quantity,price,time,colorImg,callback) {
	UserModel.update({
		username: username
	}, {
		$addToSet: {
			order: {
				ProductKeyWord:ProductKeyWord,
				size:size,
				quantity:quantity,
				price:price,
				time:time,
				colorImg:colorImg
			}
		}
	},function(err,data){
		callback(data);
	});
};

exports.getOrder = function(username, callback) {
	UserModel.find({
		username: username
	}, function(err, data) {
		callback(data);
	})
};

exports.del = function(id,username, callback) {
	UserModel.update({
		username: username
	}, {
		$pull:{
			order:{
				_id:id
			}
		}
	},function(err, data) {
		UserModel.find({
			username: username
		},function(err,data){
			callback(data);
		})
	});
	//console.log(id,username);
};
