const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    {
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        required: true 
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
},
    { timestamps: true })

    module.exports = mongoose.model("User", userSchema)