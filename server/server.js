const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const router = require("./routes/auth.js");

dotenv.config();

const dbConfig = require("./config/db.config");
const app = express();
const db = require("./models"); 
const Role = db.role; 

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB."); 
    initial(); 
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
 
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", router);

app.post("/api/current-user", (req, res) => {
    res.json({
        message: `Your message is recieved ${JSON.stringify(req.headers.token)}`,
    })
})

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/pet.route')(app);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))