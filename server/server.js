require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const sensorRoute = require("./src/routes/sensor.route");

const app = express();
const PORT = process.env.PORT || 3000;

function DBConnection() {
  try {
    mongoose.connect(process.env.MONGO_URL_STRING).then(() => {
      console.log("connected to Database");
      app.listen(PORT, () => {
        console.log("server started on port:", PORT);
      });
    });
  } catch (error) {
    console.error("error connecting to Database", error);
  }
}

DBConnection();

app.use(express.json());
app.use(cors());

app.use("/sensor", sensorRoute);

app.get("/", (req, res) => {
  res.status(200).send("welcome message");
});
