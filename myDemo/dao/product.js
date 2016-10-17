/**
 * Created by Administrator on 2016/7/1.
 */
var mongoose =  require("./database").mongoose;

var ProductPcSchema = new mongoose.Schema({
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
    smallImg:[],
    bigImg:[],
    listImg:"string",
    classification:"string"
});
exports.ProductPcModel = mongoose.model("ProductsPc", ProductPcSchema, "productsPc");