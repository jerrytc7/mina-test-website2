const mongoose = require("mongoose")

const {model, Schema} = mongoose

const schema = new Schema({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = model("user", schema)