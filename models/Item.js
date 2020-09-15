const moongose = require("mongoose");

const Schema = moongose.Schema;

exports.ItemSchema = ItemSchema = new Schema({
    imgLink:{
        type:String,
        required: true
    },
    source:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    quantity:{
      type: Number,
      default: 0
    }
})

exports.Item = moongose.model("Item", ItemSchema);