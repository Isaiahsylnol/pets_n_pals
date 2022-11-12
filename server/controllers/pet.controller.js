const db = require("../models");
const Pet = db.pet;
const User = db.user;

// Retrieve all Pet from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};
  Pet.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pets.",
      });
    });
};
// Find a single Pet with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Failed to find Pets for user id: " + id });
      else res.send(data.pets);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Pets for user id= " + id });
    });
};
// Update a Pet by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  User.findOneAndUpdate(
    { "pets.name": req.body.target, username: req.body.username },
    {
      $set: {
        "pets.$.name": req.body.name,
        "pets.$.weight": req.body.weight,
        "pets.$.age": req.body.age,
        "pets.$.breed": req.body.breed,
      },
    },
    {
      new: true,
    },
    function (err, user) {
      if (err) res.send(500, { error: err });
      res.send({ user });
    }
  );
};
// Delete a Pet with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Delete query can not be empty!",
    });
  }
  try {
    User.findById(req.body.id, function (err, user) {
      remainingArr = user.pets.filter((data) => data.name != req.body.name);
      user.pets = remainingArr;
      user.save().then(res.json(user.pets));
    });
  } catch (e) {
    console.log(e);
  }
};
// Delete all Pets from the database.
exports.deleteAll = (req, res) => {
  Pet.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Pet was deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all pets.",
      });
    });
};

exports.addPet = (req, res) => {
  const pet = new Pet({
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
    weight: req.body.weight,
  });
  try {
    User.findById(req.body.userId, function (err, user) {
      user.pets.push(pet);
      user.save().then(res.json(user));
    });
  } catch (e) {
    console.log(e);
  }
};
