import Glucose from "../models/glucoseModel.js";
import asyncHandler from "express-async-handler";

const getAllGlucose = asyncHandler(async (req, res) => {
  const allGlucose = await Glucose.find({});
  res.json(allGlucose);
});

const createGlucose = asyncHandler(async (req, res) => {
  const { name, qty } = req.body;

  const glucose = await Glucose.create({
    name,
    qty
  });
  if (glucose) {
    res.status(201).json({
      _id: glucose._id,
      name: glucose.name,

    });
  } else {
    res.status(400);
    throw new Error("Record not created!");
  }
});


export { getAllGlucose, createGlucose };
