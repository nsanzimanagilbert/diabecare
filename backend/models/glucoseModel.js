import mongoose from "mongoose";

const glucoseSechema = mongoose.Schema(
  {
    type: {
      type: String
    },
    name: {
      type: String
    },
    qty: {
      type: Number,
      required: true
    },
    period:{
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const Glucose = mongoose.model("Glucose", glucoseSechema);

export default Glucose;
