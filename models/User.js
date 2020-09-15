const moongose = require("mongoose");
const bcrypt = require('bcryptjs');
const ItemSchema = require('./Item').ItemSchema;
const Schema = moongose.Schema;

// set a hash for password
const setPasswordHash = value => (
     bcrypt.hashSync(value, 10)
)

const UserSchema = new Schema({
    username: {
        type:String,
        required:true, 
        unique:true
    },
    email: {
        type:String, 
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true,
        set: setPasswordHash
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default: false
    },
    created_at: {
        type:Date, 
        default: Date.now
    },
    items: [ItemSchema]
})

module.exports = User = moongose.model("User", UserSchema);