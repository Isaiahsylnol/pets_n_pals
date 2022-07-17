module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      name: String,
      username: String,
      email: String,
      address: String,
      account_type: {
        type: String,
        default: "Standard"
      },
      password: String,
      roles: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
          }
        ],
      pets: Array
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};