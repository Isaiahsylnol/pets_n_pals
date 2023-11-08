const config = require("../config/auth.config");
const { v4: uuidv4 } = require("uuid");

module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    token: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    expiryDate: Date,
  });

  schema.static("createToken", async function (user) {
    let expiredAt = new Date();

    expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);

    let _token = uuidv4();

    let object = new this({
      token: _token,
      user: user.id,
      expiryDate: expiredAt.getTime(),
    });

    console.log(object);

    let refreshToken = await object.save();

    return refreshToken.token;
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const RefreshTokenSchema = mongoose.model("refreshToken", schema);
  return RefreshTokenSchema;
};
