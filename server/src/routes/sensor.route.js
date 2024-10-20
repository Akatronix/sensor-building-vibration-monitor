// // const express = require("express");
// const router = express.Router();

// const {
//   getAllValue,
//   CreateSensor,
//   UpdateSensor,
//   getSingleSensor,
//   deleteSensor,
//   downloadFile,
// } = require("../controllers/sensor.controller.js");

// router.get("/", getAllValue);
// router.get("/:id", getSingleSensor);
// router.post("/create", CreateSensor);
// router.post("/update/:id", UpdateSensor);
// router.delete("/delete/:id", deleteSensor);
// router.get("/download/:id", downloadFile);
// module.exports = router;



const express = require("express");
const router = express.Router();

const {
  getAllValue,
  CreateSensor,
  UpdateSensor,
  getSingleSensor,
  deleteSensor,
  downloadFile,
} = require("../controllers/sensor.controller.js");

router.get("/", getAllValue);
router.get("/:id", getSingleSensor);
router.post("/create", CreateSensor);
router.post("/update/:id", UpdateSensor);
router.delete("/delete/:id", deleteSensor);
router.get("/download/:id", downloadFile);
module.exports = router;
