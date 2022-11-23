import mongoose from "mongoose";

const glucoseSechema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,

    },
    qty: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Glucose = mongoose.model("Glucose", glucoseSechema);

export default Glucose;
