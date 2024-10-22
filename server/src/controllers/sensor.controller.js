const SensorModel = require("../models/sensor.model");

async function getAllValue(req, res) {
  try {
    const data = await SensorModel.find();

    if (!data) return res.status(500).send({ message: "unable to get data" });

    res.status(200).send({
      message: "all sensor values",
      data: data,
    });
  } catch (error) {
    console.error("error getting sensors datas", error);
    res.status(500).send({ message: "error getting sensors datas" });
  }
}

// creating sensor
async function CreateSensor(req, res) {
  try {
    const { x, y, z, info, name } = req.body;
    if (!info || !x || !y || !z || !name)
      return res.status(400).send({ message: "fields are required!" });

    const data = await SensorModel.findOne({ info });
    if (data)
      return res.status(400).send({
        message: "you can not save more than one sensors data in one file",
      });

    const newStr = info.replace(/ /g, "-");
    const filetxt = `${newStr}.txt`;

    const newSensor = await SensorModel.create({
      x,
      y,
      z,
      info: filetxt,
      name,
    });

    if (!newSensor)
      return res.status(500).send({ message: "fail to create sensor" });

    await newSensor.save;

    res
      .status(201)
      .send({ message: "sensor created successfully...", data: newSensor });
  } catch (error) {
    console.error("error creating new sensor", error);
    res.status(500).send({ message: "error creating new sensor" });
  }
}

//  update sensor
async function UpdateSensor(req, res) {
  try {
    const sensorID = req.params.id;
    const { x, y, z } = req.body;
    if (!x || !y || !z)
      return res.status(400).send({ message: "sensor fields is required!" });

    const data = await SensorModel.findByIdAndUpdate(
      sensorID,
      { x, y, z },
      { new: true }
    );

    if (!data) return res.status(404).send({ message: "sensor is not found!" });
    res.status(200).send({ message: "updated sucessfully...", data: data });
  } catch (error) {
    console.error("error updating sensor data", error);
    res.status(500).send({ message: "error updating sensor data" });
  }
}

// delete sensor
async function deleteSensor(req, res) {
  try {
    const dataID = req.params.id;
    if (!dataID) return res.status(404).send({ message: "id required!" });

    const data = await SensorModel.findByIdAndDelete(dataID);
    if (!data) return res.status(404).send({ message: "sensor is not found!" });
    await data.delete;

    res
      .status(200)
      .send({ message: "sensor deleted successfully...", data: data });
  } catch (error) {
    console.error("error deleting single sensor data", error);
    res.status(500).send({ message: "error deleting single sensor data" });
  }
}

module.exports = {
  getAllValue,
  CreateSensor,
  UpdateSensor,
  deleteSensor,
};
