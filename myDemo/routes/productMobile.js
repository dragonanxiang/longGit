/**
 * Created by Administrator on 2016/7/7.
 */
var express = require('express');
var router = express.Router();
var ProductMobileService=require("../service/productServiceMobile");

router.post("/getAllProductMobile", function(req, res) {
    console.log("in");
    ProductMobileService.getAllProductMobile(function(data){
        res.send(data);
    });
});

router.post("/getDetailProductMobile", function(req, res) {
    var id=req.body.id;
    ProductMobileService.getDetailProductMobile(id,function(data){
        res.send(data);
    });
});





module.exports = router;