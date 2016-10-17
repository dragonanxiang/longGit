/**
 * Created by Administrator on 2016/7/7.
 */
var ProductMobileModel = require("./productMobile").ProductMobileModel;

exports.getAllProductMobile = function(callback) {
    ProductMobileModel.find(function(err,data){
        callback(data);
    });
};

exports.getDetailProductMobile = function(id,callback) {
    ProductMobileModel.find({
        _id:id
    },function(err,data){
        callback(data);
    });

};