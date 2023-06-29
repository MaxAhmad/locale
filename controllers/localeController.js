const State = require("../model/localeModel");
const Lga = require("../model/lgaModal");
const Region = require("../model/regionsModal");

exports.createState = async (req, res) => {
  try {
    const state = await State.create(req.body);
    res.status(201).json({
      status: "success",
      data: { state },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllState = async (req, res) => {
  try {
    // const queryObj = {...req.query}
    // const fields = ['state', 'lga']

    const queryObj = req.query;
    const response = await State.find(queryObj);

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getAllLga = async (req, res) => {
  try {
    const queryObj = req.query;
    const response = await Lga.find(queryObj);
    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getAllRegions = async (req, res) => {
  try {
    const queryObj = req.query;
    const response = await Region.find(queryObj);
    res.status(200).json({
      length: response.length,
      response,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
