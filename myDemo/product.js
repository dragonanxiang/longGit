var mongoose = require("mongoose");
var dbURI = "mongodb://localhost/peng";

mongoose.connect(dbURI);
mongoose.connection.on("connected", function () {
    console.log("db start");
});

var ProductSchema = mongoose.Schema({
    colorCategories: "string",
    keyWord: "string",
    price: "string",
    itemNumber: "string",
    sizes: [],
    color: "string",
    gender: "string",
    name: "string",
    series: "string",
    category: "string",
    styleName: "string",
    material: "string",
    colorImg: [],
    //smallImg: [],//手机端没有这个
    bigImg: [],
    detailImgBig: [],
    detailImgSmall: [],
    listImg: "string",
    classification: "string"
});

//var SeatsSchema = mongoose.Schema({
//	id: "string",
//    rowNo: "string",
//    colNo: "string",
//    displayName: "string",
//    status: "number"
//});

//var ProductModelPc = mongoose.model("productsPc", ProductSchema, "productsPc");
var ProductModelMobile = mongoose.model("productsMobile", ProductSchema, "productsMobile");

//MovieModel.find({
//	_id: "5754ee7bbae5606406000001"
//}, function(err, data) {
//	var arr = [11, 12];
//	var seats = data[0].seats;
//	for(var i = 0; i < arr.length; i++) {
//		for(var j = 0; j < seats.length; j++) {
//			if(arr[i] == seats[j].id) {
//				seats[j].status = 1;
//			}
//		}
//	}
//	console.log(seats);
//
//	MovieModel.update({
//		_id: "5754ee7bbae5606406000001"
//	}, {$set: {
//		seats: seats
//	}}, function(err, data) {
//		console.log(data);
//	})
//});


// var arr = [];

// for (var i = 1; i < 3; i++) {
//     for (var j = 1; j < 3; j++) {
//         arr.push({
//         	id: i + "" + j,
//             rowNo: i,
//             colNo: j,
//             displayName: i + "排" + j + "号",
//             status: "0"
//         })
//     }
// }


//new ProductModelPc({
//colorCategories:"1种颜色",
//keyWord:"训练 男子 短袖T恤 白",
//price:"¥229",
//itemNumber:"AZ9611",
//sizes:["XS","S","M","L","XL","2XL","3XL"],
//color:"白",
//gender:"男子",
//name:"短袖T恤",
//series:"运动表现",
//category:"训练",
//styleName:"ADI CROWN",
//material:"100% 棉",
//colorImg:["./pc-img/m-t-white/small-1.jpg"],
//smallImg:["./pc-img/m-t-white/small-1.jpg","./pc-img/m-t-white/small-2.jpg","./pc-img/m-t-white/small-3.jpg","./pc-img/m-t-white/small-4.jpg","./pc-img/m-t-white/small-5.jpg"],
//bigImg:["./pc-img/m-t-white/big-1.jpg","./pc-img/m-t-white/big-2.jpg","./pc-img/m-t-white/big-3.jpg","./pc-img/m-t-white/big-4.jpg","./pc-img/m-t-white/big-5.jpg"],
//detailImgBig:["./pc-img/m-t-white/1.jpg","./pc-img/m-t-white/2.jpg","./pc-img/m-t-white/3.jpg","./pc-img/m-t-white/4.jpg","./pc-img/m-t-white/5.jpg","./pc-img/m-t-white/6.jpg"],
//detailImgSmall:["./pc-img/m-t-white/d1.jpg","./pc-img/m-t-white/d2.jpg","./pc-img/m-t-white/d3.jpg","./pc-img/m-t-white/d4.jpg","./pc-img/m-t-white/d5.jpg","./pc-img/m-t-white/d6.jpg"],
//listImg:"./pc-img/index/b6_753.jpg",
//classification:"clothes"
//},{
//colorCategories: "3种颜色",
//keyWord: "三叶草 男子 Superstar 经典鞋 学院红",
//price: "¥799",
//itemNumber: "B42621",
//sizes: ["39", "39.5", "40", "40.5", "41", "41.5", "42"],
//color: "学院红/学院红/学院红",
//gender: "男子",
//name: "经典鞋",
//series: "运动经典",
//category: "三叶草",
//styleName: "SUPERSTAR",
//material: " ",
//colorImg: ["./pc-img/m-shoe-red/small-1.jpg", "./pc-img/m-shoe-red/18_834.jpg", "./pc-img/m-shoe-red/3b_746.jpg"],
//smallImg: ["./pc-img/m-shoe-red/small-1.jpg", "./pc-img/m-shoe-red/small-2.jpg", "./pc-img/m-shoe-red/small-3.jpg", "./pc-img/m-shoe-red/small-4.jpg", "./pc-img/m-shoe-red/small-5.jpg"],
//detailImgBig:["./pc-img/m-shoe-red/1.jpg", "./pc-img/m-shoe-red/2.jpg", "./pc-img/m-shoe-red/3.jpg","./pc-img/m-shoe-red/4.jpg", "./pc-img/m-shoe-red/5.jpg"],
//bigImg: ["./pc-img/m-shoe-red/big-1.jpg", "./pc-img/m-shoe-red/big-2.jpg", "./pc-img/m-shoe-red/big-3.jpg", "./pc-img/m-shoe-red/big-4.jpg", "./pc-img/m-shoe-red/big-5.jpg"],
//detailImgSmall: ["./pc-img/m-shoe-red/d1.jpg", "./pc-img/m-shoe-red/d2.jpg"],
//listImg: "./pc-img/index/fa_841.jpg",
//classification: "shoes"
//},{
// colorCategories:"3种颜色",
// keyWord:"三叶草 男子 Stan Smith 经典鞋 亮黄荧光",
// price:"¥829",
// itemNumber:"BB4996",
// sizes:["39","39.5","40","40.5","41","41.5","42"],
// color:"亮黄荧光/亮黄荧光/亮黄荧光",
// gender:"男子",
// name:"经典鞋",
// series:"运动经典",
// category:"三叶草",
// styleName:"STAN SMITH",
// material:" ",
// colorImg:["./pc-img/m-shoe-yellow/small-1.jpg","./pc-img/m-shoe-yellow/8b_724.jpg","./pc-img/m-shoe-yellow/ec_766.jpg"],
// smallImg:["./pc-img/m-shoe-yellow/small-1.jpg","./pc-img/m-shoe-yellow/small-2.jpg","./pc-img/m-shoe-yellow/small-3.jpg","./pc-img/m-shoe-yellow/small-4.jpg","./pc-img/m-shoe-yellow/small-5.jpg"],
// bigImg:["./pc-img/m-shoe-yellow/big-1.jpg","./pc-img/m-shoe-yellow/big-2.jpg","./pc-img/m-shoe-yellow/big-3.jpg","./pc-img/m-shoe-yellow/big-4.jpg","./pc-img/m-shoe-yellow/big-5.jpg"],
//detailImgSmall:["./pc-img/m-shoe-yellow/d1.jpg", "./pc-img/m-shoe-yellow/d2.jpg"],
// detailImgBig: ["./pc-img/m-shoe-yellow/1.jpg", "./pc-img/m-shoe-yellow/2.jpg", "./pc-img/m-shoe-yellow/3.jpg", "./pc-img/m-shoe-yellow/4.jpg", "./pc-img/m-shoe-yellow/5.jpg"],
//listImg:"./pc-img/index/f4_785.jpg",
// classification:"shoes"
//},{
//    colorCategories: "2种颜色",
//    keyWord: "三叶草 男女 经典鞋 纯质灰",
//    price: "¥629",
//    itemNumber: "F37325",
//    sizes: ["39", "39.5", "40", "40.5", "41", "41.5", "42"],
//    color: "纯质灰/1号黑色",
//    gender: "男子",
//    name: "经典鞋",
//    series: "运动经典",
//    category: "三叶草",
//    styleName: "ADI-EASE CLIMA",
//    material: " ",
//    colorImg: ["./pc-img/mw-shoe-gray/small-1.jpg", "./pc-img//mw-shoe-gray/42_745.jpg"],
//    smallImg: ["./pc-img/mw-shoe-gray/small-1.jpg", "./pc-img/mw-shoe-gray/small-2.jpg", "./pc-img/mw-shoe-gray/small-3.jpg", "./pc-img/mw-shoe-gray/small-4.jpg", "./pc-img/mw-shoe-gray/small-5.jpg"],
//    bigImg: ["./pc-img/mw-shoe-gray/big-1.jpg", "./pc-img/mw-shoe-gray/big-2.jpg", "./pc-img/mw-shoe-gray/big-3.jpg", "./pc-img/mw-shoe-gray/big-4.jpg", "./pc-img/mw-shoe-gray/big-5.jpg"],
//    detailImgSmall:["./pc-img/mw-shoe-gray/d1.jpg", "./pc-img/mw-shoe-gray/d2.jpg"],
//    detailImgBig: ["./pc-img/mw-shoe-gray/1.jpg", "./pc-img/mw-shoe-gray/2.jpg", "./pc-img/mw-shoe-gray/3.jpg", "./pc-img/mw-shoe-gray/4.jpg", "./pc-img/mw-shoe-gray/5.jpg"],
//    listImg: "./pc-img/index/60_774.jpg",
//    classification: "shoes"
//}).save(function (err, data) {
//        console.log(data)
//    });

new ProductModelMobile({
    //colorCategories: "1种颜色",
    //keyWord: "训练 男子 短袖T恤 白",
    //price: "¥229",
    //itemNumber: "AZ9611",
    //sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    //color: "白",
    //gender: "男子",
    //name: "短袖T恤",
    //series: "运动表现",
    //category: "训练",
    //styleName: "ADI CROWN",
    //material: "100% 棉",
    //colorImg: ["./mobile-img/m-t-white/37_769.jpg"],
    //bigImg: ["./mobile-img/m-t-white/top-img-1.jpg", "./mobile-img/m-t-white/top-img-2.jpg", "./mobile-img/m-t-white/top-img-3.jpg", "./mobile-img/m-t-white/top-img-4.jpg", "./mobile-img/m-t-white/top-img-5.jpg"],
    //detailImgBig: ["./mobile-img/m-t-white/1.jpg", "./mobile-img/m-t-white/2.jpg", "./mobile-img/m-t-white/3.jpg", "./mobile-img/m-t-white/4.jpg", "./mobile-img/m-t-white/5.jpg", "./mobile-img/m-t-white/6.jpg"],
    //detailImgSmall: ["./mobile-img/m-t-white/d1.jpg", "./mobile-img/m-t-white/d2.jpg", "./mobile-img/m-t-white/d3.jpg", "./mobile-img/m-t-white/d4.jpg", "./mobile-img/m-t-white/d5.jpg", "./mobile-img/m-t-white/d6.jpg"],
    //listImg: "./mobile-img/index/37_769.jpg",
    //classification: "clothes"
//},{
//    colorCategories: "3种颜色",
//    keyWord: "三叶草 男子 Superstar 经典鞋 学院红",
//    price: "¥799",
//    itemNumber: "B42621",
//    sizes: ["39", "39.5", "40", "40.5", "41", "41.5", "42"],
//    color: "学院红/学院红/学院红",
//    gender: "男子",
//    name: "经典鞋",
//    series: "运动经典",
//    category: "三叶草",
//    styleName: "SUPERSTAR",
//    material: " ",
//    colorImg: ["./mobile-img/m-shoe-red/fa_841_002.jpg", "./mobile-img/m-shoe-red/18_834.jpg", "./mobile-img/m-shoe-red/3b_746.jpg"],
//    detailImgBig: ["./mobile-img/m-shoe-red/1.jpg", "./mobile-img/m-shoe-red/2.jpg", "./mobile-img/m-shoe-red/3.jpg", "./mobile-img/m-shoe-red/4.jpg", "./mobile-img/m-shoe-red/5.jpg"],
//    bigImg: ["./mobile-img/m-shoe-red/top-img-1.jpg", "./mobile-img/m-shoe-red/top-img-2.jpg", "./mobile-img/m-shoe-red/top-img-3.jpg", "./mobile-img/m-shoe-red/top-img-4.jpg", "./mobile-img/m-shoe-red/top-img-5.jpg"],
//    detailImgSmall: ["./mobile-img/m-shoe-red/d1.jpg", "./mobile-img/m-shoe-red/d2.jpg"],
//    listImg: "./mobile-img/index/fa_841.jpg",
//    classification: "shoes"
//},{
//    colorCategories: "1种颜色",
//    keyWord: "足球 男子 针织图案短袖 汉玉白",
//    price: "¥299",
//    itemNumber: "AJ5159",
//    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
//    color: "汉玉白",
//    gender: "男子",
//    name: "针织短袖",
//    series: "运动表现",
//    category: "足球",
//    styleName: "UF GRA TEE",
//    material: "82% 涤纶/18% 氨纶",
//    colorImg: ["./mobile-img/m-t/1f_811.jpg"],
//    detailImgBig: ["./mobile-img/m-t/1.jpg", "./mobile-img/m-t/2.jpg", "./mobile-img/m-t/3.jpg", "./mobile-img/m-t/4.jpg", "./mobile-img/m-t/5.jpg", "./mobile-img/m-t/6.jpg"],
//    bigImg: ["./mobile-img/m-t/top-img-1.jpg", "./mobile-img/m-t/top-img-2.jpg", "./mobile-img/m-t/top-img-3.jpg", "./mobile-img/m-t/top-img-4.jpg", "./mobile-img/m-t/top-img-5.jpg"],
//    detailImgSmall: ["./mobile-img/m-t/d1.jpg", "./mobile-img/m-t/d2.jpg", "./mobile-img/m-t/d3.jpg", "./mobile-img/m-t/d4.jpg", "./mobile-img/m-t/d5.jpg", "./mobile-img/m-t/d6.jpg"],
//    listImg: "./mobile-img/index/1f_811.jpg",
//    classification: "shoes"
//},{
//    colorCategories: "1种颜色",
//    keyWord: "训练 女子 紧身裤 午夜灰",
//    price: "¥399",
//    itemNumber: "AH8858",
//    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
//    color: "午夜灰",
//    gender: "女子",
//    name: "紧身裤",
//    series: "运动表现",
//    category: "训练",
//    styleName: "SC 3/4 TIGHT",
//    material: "82% 涤纶/18% 氨纶",
//    colorImg: ["./mobile-img/w-p-gray/68_745_002.jpg"],
//    detailImgBig: ["./mobile-img/w-p-gray/1.jpg", "./mobile-img/w-p-gray/2.jpg", "./mobile-img/w-p-gray/3.jpg", "./mobile-img/w-p-gray/4.jpg", "./mobile-img/w-p-gray/5.jpg", "./mobile-img/w-p-gray/6.jpg"],
//    bigImg: ["./mobile-img/w-p-gray/top-img-1.jpg", "./mobile-img/w-p-gray/top-img-2.jpg", "./mobile-img/w-p-gray/top-img-3.jpg", "./mobile-img/w-p-gray/top-img-4.jpg", "./mobile-img/w-p-gray/top-img-5.jpg"],
//    detailImgSmall: ["./mobile-img/w-p-gray/d1.jpg", "./mobile-img/w-p-gray/d2.jpg", "./mobile-img/w-p-gray/d3.jpg", "./mobile-img/w-p-gray/d4.jpg", "./mobile-img/w-p-gray/d5.jpg", "./mobile-img/w-p-gray/d6.jpg"],
//    listImg: "./mobile-img/index/68_745.jpg",
//    classification: "clothes"
//},{
//    colorCategories: "1种颜色",
//    keyWord: "训练 女子 紧身裤 亮绿",
//    price: "¥429",
//    itemNumber: "AI8598",
//    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
//    color: "亮绿",
//    gender: "女子",
//    name: "紧身裤",
//    series: "运动表现",
//    category: "训练",
//    styleName: "SC ONESIE AOP",
//    material: "82% 涤纶/18% 氨纶",
//    colorImg: ["./mobile-img/w-p-green/74_775.jpg"],
//    detailImgBig: ["./mobile-img/w-p-green/1.jpg", "./mobile-img/w-p-green/2.jpg", "./mobile-img/w-p-green/3.jpg", "./mobile-img/w-p-green/4.jpg", "./mobile-img/w-p-green/5.jpg", "./mobile-img/w-p-green/6.jpg"],
//    bigImg: ["./mobile-img/w-p-green/top-img-1.jpg", "./mobile-img/w-p-green/top-img-2.jpg", "./mobile-img/w-p-green/top-img-3.jpg", "./mobile-img/w-p-green/top-img-4.jpg", "./mobile-img/w-p-green/top-img-5.jpg"],
//    detailImgSmall: ["./mobile-img/w-p-green/d1.jpg", "./mobile-img/w-p-green/d2.jpg", "./mobile-img/w-p-green/d3.jpg", "./mobile-img/w-p-green/d4.jpg", "./mobile-img/w-p-green/d5.jpg", "./mobile-img/w-p-green/d6.jpg"],
//    listImg: "./mobile-img/index/74_775.jpg",
//    classification: "clothes"
//},{
    colorCategories: "3种颜色",
    keyWord: "三叶草 男女 ZX Flux 经典鞋",
    price: "¥999",
    itemNumber: "S76396",
    sizes: ["39", "39.5", "40", "40.5", "41", "41.5", "42"],
    color: "1号黑色/石墨黑/亮白",
    gender: "中性",
    name: "经典鞋",
    series: "运动经典",
    category: "三叶草",
    styleName: "ZX FLUX ADV TECH",
    material: " ",
    colorImg: ["./mobile-img/m-shoe-black/e2_724_002.jpg","./mobile-img/m-shoe-black/7f_786.jpg","./mobile-img/m-shoe-black/54_769.jpg"],
    detailImgBig: ["./mobile-img/m-shoe-black/1.jpg", "./mobile-img/m-shoe-black/2.jpg", "./mobile-img/m-shoe-black/3.jpg", "./mobile-img/m-shoe-black/4.jpg", "./mobile-img/m-shoe-black/5.jpg"],
    bigImg: ["./mobile-img/m-shoe-black/top-img-1.jpg", "./mobile-img/m-shoe-black/top-img-2.jpg", "./mobile-img/m-shoe-black/top-img-3.jpg", "./mobile-img/m-shoe-black/top-img-4.jpg", "./mobile-img/m-shoe-black/top-img-5.jpg"],
    detailImgSmall: ["./mobile-img/m-shoe-black/d1.jpg", "./mobile-img/m-shoe-black/d2.jpg"],
    listImg: "./mobile-img/m-shoe-black/1.jpg",
    classification: "shoes"
}).save(function (err, data) {
    console.log(data)
});


