module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      name: String,
    },
  );

  const Role = mongoose.model("Role", schema);
  return Role;
};