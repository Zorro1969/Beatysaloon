const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProcedureSchema = new Schema({
  title: { type: String, required: true },
  cover: { type: String },
  rating: { type: Number, default: 0 },
  votes: { type: Number, default: 0 },
  category: { type: [String] },
  price: { type: Number },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

const ProcedureModel = model("Procedure", ProcedureSchema);

module.exports = ProcedureModel;
