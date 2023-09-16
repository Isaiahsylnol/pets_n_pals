module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        validate: async (value) => {
          try {
            const result = await Cart.findOne({ userId: value });
            if (result) throw new Error("duplicity detected: id :" + value);
          } catch (error) {
            throw new Error(error);
          }
        },
      },
      status: Boolean,
      total: Number,
      products: Array,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Cart = mongoose.model("cart", schema);
  return Cart;
};
