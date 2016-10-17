/**
 * Created by Administrator on 2016/7/7.
 */
var ProductMobileDao = require("../dao/productMobileDao");

exports.getAllProductMobile = function(callback) {
    console.log("service");
    ProductMobileDao.getAllProductMobile( function(data) {
        callback(data);
    });
};
exports.getDetailProductMobile = function(id,callback) {
    ProductMobileDao.getDetailProductMobile(id,function(data){
        callback(data);
    });
};