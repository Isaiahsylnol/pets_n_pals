module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        name: String,
        age: Number,
        breed: String, 
        weight: {
          type: Number,
          default: 23
        },
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Pet = mongoose.model("pet", schema);
    return Pet;
  };