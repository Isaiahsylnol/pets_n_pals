import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import morgan from "morgan";
import dotenv from "dotenv"
import router from "./routes/auth.js"
dotenv.config();

const app = express();

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         })
    .then(() => console.log("DATABASE CONNECTED"))
    .catch((err) => console.log("DB connection error ", err));


app.use(cors());
app.use(morgan("dev"));

app.use("/api", router);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))