const mongoose = require("mongoose")

const stateSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    population: {
      type: String,
      required: true
    },
    capital: {
      type: String,
      required: true
    },
    major_dialect:{
        type: [String],
       required: true
    },
    landmass: {
      type: String,
      required: true
    },
    region: {
      type: String,
     required: true
    },
    economic_activities: {
        type: [String],
       required: true
    },
    local_government_areas: {
        type: [String],
        required: true
    },
    average_rainfall: {
      type: String,
      required: true
    },
    average_temperature: {
      type: String,
      required: true
    },
    
  }
);

const State = mongoose.model("State", stateSchema);

module.exports = State;
