var mongoose =  require("./database").mongoose;

var orderSchema=new mongoose.Schema({
	ProductKeyWord:"string",
	size:"string",
	quantity:"string",
	price:"string",
	time:"string",
	colorImg:"string"
});
var UserSchema = new mongoose.Schema({
	username: "string",
	password: "string",
	realName:"string",
	tel:"string",
	gender:"string",
	order:[orderSchema]
});

exports.UserModel = mongoose.model("user", UserSchema, "user");