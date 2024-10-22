const express = require("express");
const router = express.Router();

const {
  getAllValue,
  CreateSensor,
  UpdateSensor,
  deleteSensor,
} = require("../controllers/sensor.controller.js");

router.get("/", getAllValue);
router.post("/create", CreateSensor);
router.post("/update/:id", UpdateSensor);
router.delete("/delete/:id", deleteSensor);
module.exports = router;
