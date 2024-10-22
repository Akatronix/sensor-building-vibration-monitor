const mongoose = require("mongoose");

const sensorSchema = mongoose.Schema(
  {
    x: {
      type: String,
      required: true,
    },
    y: {
      type: String,
      required: true,
    },
    z: {
      type: String,
      required: true,
    },

    info: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: { createdAt: "createdAtField", updatedAt: "date" },
  }
);

const SensorModel = mongoose.model("sensor", sensorSchema);

module.exports = SensorModel;
