const config = require("../config/auth.config");
const db = require("../models");
const Pet = db.pet;
const User = db.user;

// exports.addPet = (req, res) => {
//     const pet = new Pet({
//     name: req.body.name,
//     age: req.body.age,
//     breed: req.body.breed,
//     avatar: req.body.avatar,
//   });
//   try {
//   User.findById("629598213645dbcfe0328eea", function(err, item) {

//     item.pets.push(pet)
//     item.save().then(
//       res.json('Pet created!'))
//   })
//   } catch (e) {
//     console.log(e);
//  } 
// }; 

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

// -- EDIT PET --

exports.editPet = (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const target = req.body.target;
  User.updateOne( { username: username, "pets.name": target },
  { $set: { "pets.$.name" : name } }, {new: true}, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Original Doc : ", docs);
        res.json('Pet edited!')
    }
})
};

exports.findPet = async (req, res) => {
  let pet = await Pet.findOne({
    name: req.body.name
  })
  console.log(pet)
};
