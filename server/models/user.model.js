const mongoose = require('mongoose')
const { Schema } = mongoose
const petSchema = require('./pet.model')

const dogSchema = new Schema({
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
ownerId: {
    type: Number,
    requred: true
}
},
{ timestamps: true }
)

const userSchema = new Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true 
    },
    password: {
        type: String,
        trim: true,
        required: true, 
        unique: true
    },
    pets: [
      dogSchema
      ],
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
},
    { timestamps: true })

    module.exports = mongoose.model("User", userSchema)