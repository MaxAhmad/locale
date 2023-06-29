const mongoose = require("mongoose")

const lgaSchema = new mongoose.Schema(
  {
    lga: {
        type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stateRegion: {
      type: String,
     required: true
    },
    economicActivities: {
        type: [String],
       required: true
    },
    
  }
);

const Lga = mongoose.model("Lga", lgaSchema);

module.exports = Lga;
