const mongoose = require("mongoose")

const regionSchema = new mongoose.Schema(
  {
    region: {
        type: String,
      required: true,
    },
    states: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    economicActivities: {
        type: [String],
       required: true
    },
    
  }
);

const Region = mongoose.model("Region", regionSchema);

module.exports = Region;
