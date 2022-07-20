const db = require('../models')
const Pet = db.pet;
const User = db.user;
 
// Retrieve all Pet from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    const condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    Pet.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving pets."
        });
      });
  };
// Find a single Pet with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Pet.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Pet with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Pet with id=" + id });
      });
  };
// Update a Pet by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
    Pet.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Pet with id=${id}. Maybe Pet was not found!`
          });
        } else res.send({ message: "Pet was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Pet with id=" + id
        });
      });
  };
// Delete a Pet with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    try {
      User.findById(req.body.userId, function(err, user) {
    
        user.pets.push(pet)
        user.save().then(
          res.json(user))
      })
      } catch (err) {
        console.log(e);
     } 
  };
// Delete all Pet from the database.
exports.deleteAll = (req, res) => {
    Pet.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Pet were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all pets."
        });
      });
  };

  exports.addPet = (req, res) => {
    const pet = new Pet({
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed,
      weight: req.body.weight
    }); 
    try {
      User.findById(req.body.userId, function(err, user) {
    
        user.pets.push(pet)
        user.save().then(
          res.json(user))
      })
      } catch (e) {
        console.log(e);
     } 
  }