const mongoose = require('mongoose')
const { Schema } = mongoose

const petSchema = new Schema(
    {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true 
    },
    breed: {
        type: String,
        trim: true,
        required: true, 
    },
    avatar: {
        type: String,
        trim: true,
    },
},
    { timestamps: true })

    module.exports = mongoose.model("Pet", petSchema)