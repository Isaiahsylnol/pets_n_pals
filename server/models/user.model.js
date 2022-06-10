const mongoose = require('mongoose')
const { Schema } = mongoose

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
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Pet"
        }
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