const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProcedureSchema = new Schema({
  deliverydate: { type: Date, required: true },
  username: { type: String, required: true },
  orderdate: { type: Stirng, default: new Date() },
  procedures: [{ type: Schema.Types.ObjectId, ref: "Procedure" }],
});

const ProcedureModel = model("Order", OrderSchema);

module.exports = ProcedureModel;
