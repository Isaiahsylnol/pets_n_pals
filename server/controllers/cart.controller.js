const db = require('../models')
const Cart = db.cart;

// Retrieve all Carts from the database.
exports.findAll = (req, res) => {
    Cart.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving carts."
        });
      });
} 
// Find a single Cart with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Cart.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Failed to find Cart with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Cart with id=" + id });
      });
  };

  // Create a cart given user's ID
  exports.createCart = (req, res) => {
    console.log(req.body)
    const cart = new Cart({
        _id: req.body.userId,
        status: req.body.status,
        quantity: req.body.quantity,
        total: req.body.total,
        products: req.body.products
      }); 
      cart.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
  };
 
 
 