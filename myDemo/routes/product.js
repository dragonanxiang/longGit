/**
 * Created by Administrator on 2016/7/1.
 */
var express = require('express');
var router = express.Router();
var ProductPcService=require("../service/productService");


router.post("/getAllProduct", function(req, res) {
    ProductPcService.getAllProduct(function(data){
        res.send(data);
    });
});

router.post("/getDetail", function(req, res) {
    var id=req.body.id;
    //console.log(id);
    ProductPcService.getDetail(id,function(data){
        res.send(data);
    });
});





module.exports = router;