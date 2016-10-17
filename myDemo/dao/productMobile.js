/**
 * Created by Administrator on 2016/7/7.
 */
var mongoose =  require("./database").mongoose;

var ProductMobileSchema = new mongoose.Schema({
    colorCategories:"string",
    keyWord:"string",
    price:"string",
    itemNumber:"string",
    sizes:[],
    color:"string",
    gender:"string",
    name:"string",
    series:"string",
    category:"string",
    styleName:"string",
    material:"string",
    colorImg:[],
    bigImg:[],
    listImg:"string",
    classification:"string"
});
exports.ProductMobileModel = mongoose.model("ProductsMobile", ProductMobileSchema, "productsMobile");