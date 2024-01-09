import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model("country", CountrySchema);
