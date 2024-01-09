import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  category: String,
  company: String,
  status: String,
  promotion: String,
  country: String,
  joined_date: String,
});

export default mongoose.model("company", CompanySchema);
