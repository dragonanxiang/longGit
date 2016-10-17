/**
 * Created by Administrator on 2016/7/1.
 */
var ProductPcDao = require("../dao/productDao");

exports.getAllProduct = function(callback) {
    ProductPcDao.getAllProduct( function(data) {
        callback(data);
    });
};
exports.getDetail = function(id,callback) {
    ProductPcDao.getDetail(id,function(data){
        callback(data);
    });
};