var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({
    title: {type:String, default: ''},
    des: {type:String, default: ''},
    image: {type:String, default: ''},
    timestamp: {type:Date, default:Date.now}


})


module.exports = mongoose.model('PostSchema', PostSchema)
