/**
 * Created by Administrator on 2016/7/1.
 */
var ProductPcModel = require("./product").ProductPcModel;

exports.getAllProduct = function(callback) {
    ProductPcModel.find(function(err,data){
        callback(data);
    });

};

exports.getDetail = function(id,callback) {
    ProductPcModel.find({
        _id:id
    },function(err,data){
        callback(data);
    });

};