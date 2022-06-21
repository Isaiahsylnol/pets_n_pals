const config = require("../config/auth.config");
const db = require("../models");
const Pet = db.pet;
const User = db.user;

exports.addPet = (req, res) => {
    const pet = new Pet({
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
    avatar: req.body.avatar,
  });
  try {
  User.findById(req.body.userId, function(err, item) {

    item.pets.push(pet)
    item.save().then(
      res.json('Pet created!'))
  })
  } catch (e) {
    console.log(e);
 } 
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
