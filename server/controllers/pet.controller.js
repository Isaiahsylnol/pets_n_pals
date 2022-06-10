const config = require("../config/auth.config");
const db = require("../models");
const Pet = db.pet;

exports.addPet = (req, res) => {
  const pet = new Pet({
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
    avatar: req.body.avatar,
    ownerId: req.body.ownerId
  });
  
  pet.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } 
  });

  Pet.findOne({
      name: req.body.name
  }).exec((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }})
    console.log(pet)
};

exports.findPet = (req, res) => {
    return Pet.findOne({
        name: req.body.name
    }).exec((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }})
}
