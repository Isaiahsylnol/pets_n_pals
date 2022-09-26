module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        userId: mongoose.Schema.Types.ObjectId,
        status: Boolean,
        quantity: Number,
        total: Number,
        products: Array
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Cart = mongoose.model("cart", schema);
    return Cart;
  };